// QUESTION 1: Fibonacci Series
/*
1. Print Fibonacci series n numbers, n is input
Example:
fib(0) = 0
fib(1) = 1
fib(5) = 0, 1, 1, 2, 3
fib(8) = 0, 1, 1, 2, 3, 5, 8, 13
*/
function question1() {
    function fibonacci(n) {
        if (n === 0) return [0];
        if (n === 1) return [0, 1];
        
        let series = [0, 1];
        
        for (let i = 2; i <= n; i++) {
            let nextNumber = series[i - 1] + series[i - 2];
            series.push(nextNumber);
        }
        
        return series;
    }
    
    console.log("Fibonacci Series:");
    console.log(fibonacci(0));
    console.log(fibonacci(1));
    console.log(fibonacci(5));
    console.log(fibonacci(8));
}


// QUESTION 2: Factorial
/*
2. Given a positive integer, n. Find the factorial of n.
Examples:
Input: n = 5
Output: 120
Explanation: 5*4*3*2*1 = 120

Input: n = 4
Output: 24
Explanation: 4*3*2*1 = 24
*/
function question2() {
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        
        let result = 1;
        
        for (let i = 2; i <= n; i++) {
            result = result * i;
        }
        
        return result;
    }
    
    console.log("Factorial:");
    console.log(factorial(5));
    console.log(factorial(4));
    console.log(factorial(0));
}


// QUESTION 3: Least Common Multiple (LCM)
/*
3. Write a function that returns the least common multiple (LCM) of two integers.
Examples:
lcm(9, 18) ➞ 18
lcm(8, 5) ➞ 40
lcm(17, 11) ➞ 187
*/
function question3() {
    function lcm(a, b) {
        // First find GCD (Greatest Common Divisor)
        function gcd(x, y) {
            while (y !== 0) {
                let temp = y;
                y = x % y;
                x = temp;
            }
            return x;
        }
        
        // LCM formula: (a * b) / GCD(a, b)
        return (a * b) / gcd(a, b);
    }
    
    console.log("Least Common Multiple:");
    console.log(lcm(9, 18));
    console.log(lcm(8, 5));
    console.log(lcm(17, 11));
}


// QUESTION 4: Insert Whitespace
/*
4. Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
Examples:
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
*/
function question4() {
    function insertWhitespace(text) {
        let result = "";
        
        for (let i = 0; i < text.length; i++) {
            result += text[i];
            
            // Check if current is lowercase and next is uppercase
            if (i < text.length - 1) {
                if (text[i] === text[i].toLowerCase() && text[i + 1] === text[i + 1].toUpperCase()) {
                    result += " ";
                }
            }
        }
        
        return result;
    }
    
    console.log("Insert Whitespace:");
    console.log(insertWhitespace("SheWalksToTheBeach"));
    console.log(insertWhitespace("MarvinTalksTooMuch"));
    console.log(insertWhitespace("TheGreatestUpsetInHistory"));
}


// QUESTION 5: All Pairs that Sum to Target
/*
5. Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].
Examples:
allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]
allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
*/
function question5() {
    function allPairs(numbers, target) {
        let pairs = [];
        
        // Check all combinations
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    let smaller = Math.min(numbers[i], numbers[j]);
                    let larger = Math.max(numbers[i], numbers[j]);
                    pairs.push([smaller, larger]);
                }
            }
        }
        
        // Sort by the smaller number
        pairs.sort((a, b) => a[0] - b[0]);
        
        return pairs;
    }
    
    console.log("All Pairs:");
    console.log(allPairs([2, 4, 5, 3], 7));
    console.log(allPairs([5, 3, 9, 2, 1], 3));
    console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
}


// QUESTION 6: Sort Ascending and Descending
/*
6. Sort numbers in ascending and descending order
Examples:
sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
sortNumsDescending([1, 2, 10, 50, 5]) ➞ [50, 10, 5, 2, 1]
sortNumsDescending([80, 29, 4, -95, -24, 85]) ➞ [85, 80, 29, 4, -24, -95]
*/
function question6() {
    function sortNumsAscending(numbers) {
        return numbers.sort((a, b) => a - b);
    }
    
    function sortNumsDescending(numbers) {
        return numbers.sort((a, b) => b - a);
    }
    
    console.log("Sort Ascending:");
    console.log(sortNumsAscending([1, 2, 10, 50, 5]));
    console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));
    
    console.log("Sort Descending:");
    console.log(sortNumsDescending([1, 2, 10, 50, 5]));
    console.log(sortNumsDescending([80, 29, 4, -95, -24, 85]));
}


// QUESTION 7: Rearrange Sentence by Numbers
/*
7. Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
Examples:
rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"
rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"
rearrange(" ") ➞ ""
*/
function question7() {
    function rearrange(sentence) {
        if (sentence.trim() === "") return "";
        
        let words = sentence.split(" ");
        let sortedWords = [];
        
        // Find the position number in each word
        for (let word of words) {
            for (let i = 0; i < word.length; i++) {
                if (!isNaN(word[i])) {
                    let position = parseInt(word[i]);
                    let cleanWord = word.replace(word[i], "");
                    sortedWords[position - 1] = cleanWord;
                }
            }
        }
        
        return sortedWords.join(" ");
    }
    
    console.log("Rearrange Sentence:");
    console.log(rearrange("is2 Thi1s T4est 3a"));
    console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"));
    console.log(rearrange(" "));
}


// QUESTION 8: Items Purchased
/*
8. Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.
Examples:
itemsPurchased({Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20"}, "$300") ➞ ["Bread", "Fertilizer", "Water"]
itemsPurchased({Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2"}, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
itemsPurchased({Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200"}, "$1") ➞ "Nothing"
*/
function question8() {
    function itemsPurchased(store, wallet) {
        // Remove $ and commas, convert to number
        let budget = parseInt(wallet.replace(/[^0-9]/g, ""));
        let affordable = [];
        
        // Check each item
        for (let item in store) {
            let price = parseInt(store[item].replace(/[^0-9]/g, ""));
            
            if (price <= budget) {
                affordable.push(item);
            }
        }
        
        if (affordable.length === 0) return "Nothing";
        
        // Sort alphabetically
        return affordable.sort();
    }
    
    console.log("Items Purchased:");
    console.log(itemsPurchased({Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20"}, "$300"));
    console.log(itemsPurchased({Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2"}, "$100"));
    console.log(itemsPurchased({Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200"}, "$1"));
}


// QUESTION 9: Get Hash Tags
/*
9. Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
Examples:
getHashTags("How the Avocado Became the Fruit of the Global Trade") ➞ ["#avocado", "#became", "#global"]
getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year") ➞ ["#christmas", "#probably", "#will"]
getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit") ➞ ["#surprise", "#parents", "#fruit"]
getHashTags("Visualizing Science") ➞ ["#visualizing", "#science"]
*/
function question9() {
    function getHashTags(headline) {
        let words = headline.split(" ");
        
        // Sort by length (longest first), keep original order for ties
        words.sort((a, b) => b.length - a.length);
        
        // Take top 3
        let top3 = words.slice(0, 3);
        
        // Convert to hashtags (lowercase with #)
        return top3.map(word => "#" + word.toLowerCase());
    }
    
    console.log("Get Hash Tags:");
    console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
    console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
    console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
    console.log(getHashTags("Visualizing Science"));
}


// QUESTION 10: Reverse Odd Length Words
/*
10. Given a string, reverse all the words which have odd length. The even length words are not changed.
Examples:
reverseOdd("Bananas") ➞ "sananaB"
reverseOdd("One two three four") ➞ "enO owt eerht four"
reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
*/
function question10() {
    function reverseOdd(sentence) {
        let words = sentence.split(" ");
        
        for (let i = 0; i < words.length; i++) {
            // Check if word length is odd
            if (words[i].length % 2 !== 0) {
                words[i] = words[i].split("").reverse().join("");
            }
        }
        
        return words.join(" ");
    }
    
    console.log("Reverse Odd Length Words:");
    console.log(reverseOdd("Bananas"));
    console.log(reverseOdd("One two three four"));
    console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
}


// ========================================
// RUN QUESTIONS HERE - Uncomment to run!
// ========================================

question1();
// question2();
// question3();
// question4();
// question5();
// question6();
// question7();
// question8();
// question9();
// question10();