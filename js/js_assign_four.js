function question1() {
    function reverseWord(word) {
        return word.split('').reverse().join('');
    }
    
    // Examples
    console.log(reverseWord("hello"));        // "olleh"
    console.log(reverseWord("JavaScript"));   // "tpircSavaJ"
    console.log(reverseWord("coding"));       // "gnidoc"
    console.log(reverseWord("computer"));     // "retupmoc"
    console.log(reverseWord("amazing"));      // "gnizama"
}

function question2() {
    function reverseSentence(sentence) {
        return sentence.split(' ').reverse().join(' ');
    }
    
    // Examples
    console.log(reverseSentence("hello world"));
    // "world hello"
    
    console.log(reverseSentence("I love JavaScript"));
    // "JavaScript love I"
    
    console.log(reverseSentence("coding is fun and exciting"));
    // "exciting and fun is coding"
    
    console.log(reverseSentence("the quick brown fox jumps"));
    // "jumps fox brown quick the"
    
    console.log(reverseSentence("learning to code every day"));
    // "day every code to learning"
}





function question3() {
    function isPalindrome(str) {
        let reversed = str.split('').reverse().join('');
        return str === reversed;
    }
    
    // Examples
    console.log(isPalindrome("racecar"));      // true
    console.log(isPalindrome("hello"));        // false
    console.log(isPalindrome("madam"));        // true
    console.log(isPalindrome("noon"));         // true
    console.log(isPalindrome("level"));        // true
}


question3();

function showConfirmUntilYes() {
    let userConfirmed = false;
    
    while (!userConfirmed) {
        userConfirmed = confirm("Please press Yes to continue!");
        
        if (!userConfirmed) {
            // If user pressed "No" or "Cancel", the loop continues
            // and the confirm will show again
        }
    }
    
    alert("Thank you for confirming!");
}

// Call the function
showConfirmUntilYes();

function showCountryCodes() {
  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"
  };
  
  for (let code in codes) {
    alert(+code); // 49, 41, 44, 1
  }
}

// Call the function
showCountryCodes();


function displayUserProperties() {
  let user = {
    name: "John",
    surname: "Smith"
  };
  
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    alert(prop); // name, surname, age
  }
}

// Call the function
displayUserProperties();


function demonstrateCloning() {
  function cloneObject(obj) {
    let clone = {}; // the new empty object
    
    // let's copy all properties into it
    for (let key in obj) {
      clone[key] = obj[key];
    }
    
    return clone;
  }
  
  // Usage
  let user = {
    name: "John",
    age: 30
  };
  
  let clone = cloneObject(user);
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert(user.name); // still John in the original object
  alert(clone.name); // Pete in the cloned object
}

// Call the function at the end
demonstrateCloning();




function demonstrateObjectMethod() {
  let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("Hello!");
  };
  
  user.sayHi(); // Hello!
}

// Call the function at the end
demonstrateObjectMethod();



function demonstrateThisKeyword() {
  let user = {
    name: "John",
    age: 30,
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  };
  
  user.sayHi(); // John
}

// Call the function at the end
demonstrateThisKeyword();



function demonstrateConstructorFunction() {
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  alert(user.name);    // Jack
  alert(user.isAdmin); // false
}

// Call the function at the end
demonstrateConstructorFunction();


function demonstrateConstructorReturn() {
  function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert(new BigUser().name);  // Godzilla, got that object
}

// Call the function at the end
demonstrateConstructorReturn();


function demonstrateOptionalChaining() {
  let key = "firstName";
  
  let user1 = {
    firstName: "John"
  };
  
  let user2 = null;
  
  alert(user1?.[key]); // John
  alert(user2?.[key]); // undefined
}

// Call the function at the end
demonstrateOptionalChaining();



function demonstrateSymbolProperties() {
  let id = Symbol("id");
  
  let user = {
    name: "John",
    age: 30,
    [id]: 123
  };
  
  for (let key in user) {
    alert(key); // name, age (no symbols)
  }
  
  // the direct access by the symbol works
  alert("Direct: " + user[id]); // Direct: 123
}

// Call the function at the end
demonstrateSymbolProperties();



function demonstrateGlobalSymbols() {
  let globalSymbol = Symbol.for("name");
  let localSymbol = Symbol("name");
  
  alert(Symbol.keyFor(globalSymbol)); // name, global symbol
  alert(Symbol.keyFor(localSymbol));  // undefined, not global
  
  alert(localSymbol.description); // name
}

// Call the function at the end
demonstrateGlobalSymbols();



function demonstrateToPrimitive() {
  let user = {
    name: "John",
    money: 1000,
    
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  alert(user);        // hint: string -> {name: "John"}
  alert(+user);       // hint: number -> 1000
  alert(user + 500);  // hint: default -> 1500
}

// Call the function at the end
demonstrateToPrimitive();




function demonstrateToString() {
  let user = {
    name: "John",
    
    toString() {
      return this.name;
    }
  };
  
  alert(user);         // toString -> John
  alert(user + 500);   // toString -> John500
}

// Call the function at the end
demonstrateToString();




function demonstrateToStringOnly() {
  let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
  };
  
  alert(obj * 2);    // 4 (toString returns "2", then converted to number)
  alert(obj + 2);    // 22 (toString returns "2", then string concatenation)
  alert(obj);        // 2 (toString)
}

// Call the function at the end
demonstrateToStringOnly();