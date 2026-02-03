// SECTION 1: Basic Alerts
function section1() {
    alert('Hello, world!');
    alert('Hello'); 
    alert('World');
}

// SECTION 2: Variables and Template Literals
function section2() {
    let message = 'Hello!'; 
    alert(message);
    
    let name = "Aryan";
    alert(`Hello, ${name}!`);
    
    alert(`The result is ${5 + 7}`);
}

// SECTION 3: More Examples
function section3() {
    let name = "Aryan";
    let age = 30;
    alert(`${name} is ${age} years old`);
    
    let price = 150;
    let quantity = 4;
    alert(`Total cost: $${price * quantity}`);
}

// SECTION 4: Undefined Example
function section4() {
    let userAge = 150;
    userAge = undefined;
    alert(userAge);
}

// SECTION 5: Comparison
function section5() {
    let isGreater = 8 > 3;
    alert(isGreater);
}

// SECTION 6: Prompt Example
function section6() {
    let personAge = prompt('How old are you?', 150);
    alert(`You are ${personAge} years old!`);
}

// SECTION 7: Confirm Example
function section7() {
    let isBoss = confirm("Are you the Team Leader?");
    alert(isBoss);
}

// SECTION 8: Number Conversions
function section8() {
    alert(Number("   456   "));
    alert(Number("456z"));
    alert(Number(true));
    alert(Number(false));
}

// SECTION 9: Boolean Conversions
function section9() {
    alert(Boolean(1));
    alert(Boolean(0));
    alert(Boolean("aryan"));
    alert(Boolean(""));
}

// SECTION 10: Binary Minus
function section10() {
    let x = 5, y = 12;
    alert(y - x);
}

// SECTION 11: Remainder Operator
function section11() {
    alert(10 % 3);
    alert(15 % 4);
    alert(20 % 5);
}

// SECTION 12: Exponentiation
function section12() {
    alert(3 ** 2);
    alert(3 ** 3);
    alert(3 ** 4);
}

// SECTION 13: String Concatenation
function section13() {
    let s = "Aryan" + "Sharma";
    alert(s);
}

// SECTION 14: String + Number
function section14() {
    alert('5' + 7);
    alert(7 + '5');
    
    let apples = "8";
    let oranges = "6";
    alert(apples + oranges);
}

// SECTION 15: Assignment with Expression
function section15() {
    let a = 5;
    let b = 10;
    let c = 20 - (a = b + 5);
    
    alert(a);
    alert(c);
}

// SECTION 16: Chaining Assignments
function section16() {
    let d, e, f;
    d = e = f = 10 + 5;
    
    alert(d);
    alert(e);
    alert(f);
}

// SECTION 17: Modify-in-Place
function section17() {
    let n = 8;
    n += 10;
    n *= 3;
    alert(n);
}

// SECTION 18: Increment
function section18() {
    let counter = 8;
    counter++;
    alert(counter);
}

// SECTION 19: Decrement
function section19() {
    let myCounter = 10;
    myCounter--;
    alert(myCounter);
}

// SECTION 20: Comma Operator
function section20() {
    let result = (5 + 8, 12 + 15);
    alert(result);
}

// SECTION 21: String Concatenation Issue
function section21() {
    let num1 = prompt("First number?", 5);
    let num2 = prompt("Second number?", 8);
    alert(num1 + num2);
}

// SECTION 22: Comparison Operators
function section22() {
    alert(8 > 3);
    alert(8 == 3);
    alert(8 != 3);
}

// SECTION 23: String Comparison
function section23() {
    alert('Z' > 'A');
    alert('Glow' > 'Glee');
    alert('Bee' > 'Be');
}

// SECTION 24: Different Types Comparison
function section24() {
    alert('8' > 5);
    alert('05' == 5);
}

// SECTION 25: Undefined Comparisons
function section25() {
    alert(undefined > 0);
    alert(undefined < 0);
    alert(undefined == 0);
}

// SECTION 26: IF Statement
function section26() {
    let year = prompt('In which year was ECMAScript-2015 specification published?', '');
    if (year == 2015) alert('You are right!');
}

// SECTION 27: IF-ELSE Statement
function section27() {
    let publicationYear = prompt('In which year was the ECMAScript-2015 specification published?', '');
    
    if (publicationYear == 2015) {
        alert('You guessed it right!');
    } else {
        alert('How can you be so wrong?');
    }
}

// SECTION 28: Ternary Operator
function section28() {
    let userCurrentAge = prompt('What is your age?', 25);
    
    let greetingMessage = (userCurrentAge < 5) ? 'Hi, little one!' :
        (userCurrentAge < 20) ? 'Hello there!' :
        (userCurrentAge < 100) ? 'Greetings!' :
        'What an unusual age!';
    
    alert(greetingMessage);
}

// SECTION 29: IF-ELSE with Company
function section29() {
    let company = prompt('Which company created JavaScript?', '');
    
    if (company == 'Netscape') {
        alert('Right!');
    } else {
        alert('Wrong.');
    }
}

// SECTION 30: OR Operator
function section30() {
    alert(true || true);    // true
    alert(false || true);   // true
    alert(true || false);   // true
    alert(false || false);  // false
}

// SECTION 31: OR with Hours
function section31() {
    let hour = 9;
    
    if (hour < 10 || hour > 18) {
        alert('The office is closed.');
    }
}

// SECTION 32: OR with Names
function section32() {
    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";
    
    alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder
}

// SECTION 33: AND Operator
function section33() {
    let hour = 12;
    let minute = 30;
    
    if (hour == 12 && minute == 30) {
        alert('The time is 12:30');
    }
}

// SECTION 34: While Loop
function section34() {
    let i = 0;
    while (i < 3) { // shows 0, then 1, then 2
        alert(i);
        i++;
    }
}

// SECTION 35: Do-While Loop
function section35() {
    let i = 0;
    do {
        alert(i);
        i++;
    } while (i < 3);
}

// SECTION 36: While with Break
function section36() {
    let sum = 0;
    
    while (true) {
        let value = +prompt("Enter a number", '');
        if (!value) break;
        sum += value;
    }
    alert('Sum: ' + sum);
}

// SECTION 37: Switch Statement
function section37() {
    let a = 3;
    
    switch (a) {
        case 4:
            alert('Right!');
            break;
        
        case 3: // (*) grouped two cases
        case 5:
            alert('Wrong!');
            alert("Why don't you take a math class?");
            break;
        
        default:
            alert('The result is strange. Really.');
    }
}

// SECTION 38: Switch with Prompt
function section38() {
    let arg = prompt("Enter a value?");
    switch (arg) {
        case '0':
        case '1':
            alert('One or zero');
            break;
        
        case '2':
            alert('Two');
            break;
        
        case 3:
            alert('Never executes!');
            break;
        
        default:
            alert('An unknown value');
    }
}

// SECTION 39: Function with Global Variable
function section39() {
    let userName = 'John';
    
    function showMessage() {
        userName = "Bob"; // (1) changed the outer variable
        let message = 'Hello, ' + userName;
        alert(message);
    }
    
    alert(userName); // John before the function call
    
    showMessage();
    
    alert(userName); // Bob, the value was modified by the function
}

// SECTION 40: Arrow Function
function section40() {
    let sum = (a, b) => a + b;
    
    /* This arrow function is a shorter form of:
    
    let sum = function(a, b) {
        return a + b;
    };
    */
    
    alert(sum(1, 2)); // 3
}


// ========================================
// RUN SECTIONS HERE - Just uncomment the one you want!
// ========================================

section1();
// section2();
// section3();
// section4();
// section5();
// section6();
// section7();
// section8();
// section9();
// section10();
// section11();
// section12();
// section13();
// section14();
// section15();
// section16();
// section17();
// section18();
// section19();
// section20();
// section21();
// section22();
// section23();
// section24();
// section25();
// section26();
// section27();
// section28();
// section29();
// section30();
// section31();
// section32();
// section33();
// section34();
// section35();
// section36();
// section37();
// section38();
// section39();
// section40();