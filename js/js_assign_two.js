// QUESTION 1: Find the Missing Letter
/**
1.Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/
function question1() {
    // Simple approach: Check each letter's code
    function findMissingLetter(letters) {
        // Join letters into one string
        let combined = letters.join("");
        
        // Loop through each letter
        for (let i = 0; i < combined.length; i++) {
            // Get the code of current letter
            let currentCode = combined.charCodeAt(i);
            // Get the code of next letter
            let nextCode = combined.charCodeAt(i + 1);
            
            // If difference is not 1, we found the gap
            if (nextCode - currentCode != 1) {
                // Return the missing letter
                return String.fromCharCode(currentCode + 1);
            }
        }
    }
    
    console.log("Find the missing letter:");
    console.log(findMissingLetter(['a','b','c','d','f'])); // e
    console.log(findMissingLetter(['O','Q','R','S'])); // P
}


// QUESTION 2: Working 9 to 5
/*
2.Working 9 to 5
Write a function that calculates overtime and pay associated with overtime.
    • Working 9 to 5: regular hours
    • After 5pm is overtime
Your function gets an array with 4 values:
    • Start of working day, in decimal format, (24-hour day notation)
    • End of working day. (Same format)
    • Hourly rate
    • Overtime multiplier
Your function should spit out:
    • $ + earned that day (rounded to the nearest hundreth)
Examples
overTime([9, 17, 30, 1.5]) ➞ "$240.00"
overTime([16, 18, 30, 1.8]) ➞ "$84.00" 
overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"

2nd example explained:
    • From 16 to 17 is regular, so 1 * 30 = 30
    • From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
    • 30 + 54 = $84.00
*/
function question2() {
    function overTime(timeLog) {
        let regularStart = 9;   // 9am
        let regularEnd = 17;    // 5pm
        
        let startTime = timeLog[0];           // When you started
        let endTime = timeLog[1];             // When you finished
        let hourlyPay = timeLog[2];           // Pay per hour
        let overtimeBonus = timeLog[3];       // Overtime multiplier
        
        // Calculate total hours worked
        let totalHours = endTime - startTime;
        console.log("Total hours worked: " + totalHours);
        
        // Calculate regular hours (up to 5pm)
        let regularHours;
        if (endTime >= regularEnd) {
            regularHours = regularEnd - startTime;
        } else {
            regularHours = endTime - startTime;
        }
        
        // Calculate overtime hours (after 5pm)
        let overtimeHours;
        if (endTime > regularEnd) {
            overtimeHours = endTime - regularEnd;
        } else {
            overtimeHours = 0;
        }
        
        // Calculate total earnings
        let regularPay = regularHours * hourlyPay;
        let overtimePay = overtimeHours * (hourlyPay * overtimeBonus);
        let totalEarnings = regularPay + overtimePay;
        
        return "$" + totalEarnings.toFixed(2);
    }
    
    console.log("Calculate overtime and pay:");
    console.log(overTime([9, 17, 30, 1.5]));      // $240.00
    console.log(overTime([16, 18, 30, 1.8]));     // $84.00
    console.log(overTime([13.25, 15, 30, 1.5]));  // $52.50
}


// QUESTION 3: Nearest Chapter
/*
3.Nearest Chapter
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.
Examples
nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"
nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"
nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"
Notes
    • All page numbers in the dictionary will be valid integers.
    • Return the higher page number if ever two pages are equidistant (see last test case).
*/
function question3() {
    function nearestChapter(book, currentPage) {
        // Get all chapter names
        let chapterNames = Object.keys(book);
        
        // Loop through each chapter
        for (let i = 0; i < chapterNames.length; i++) {
            let thisChapter = chapterNames[i];
            let nextChapter;
            
            // Check if there's a next chapter
            if ((i + 1) < chapterNames.length) {
                nextChapter = chapterNames[i + 1];
            } else {
                nextChapter = chapterNames[i];
            }
            
            // Get page numbers
            let thisPageNo = book[thisChapter];
            let nextPageNo = book[nextChapter];
            
            // Find middle point between chapters
            let middlePoint = (thisPageNo + nextPageNo) / 2;
            
            // Check if current page is in this range
            if (currentPage <= nextPageNo) {
                if (currentPage > middlePoint) {
                    return nextChapter;
                } else if (currentPage === middlePoint) {
                    return nextChapter;  // Pick higher page if equal
                } else {
                    return thisChapter;
                }
            }
        }
        return "";
    }
    
    console.log("Find nearest chapter:");
    console.log(nearestChapter({
        "Chapter 1": 1,
        "Chapter 2": 15,
        "Chapter 3": 37
    }, 10)); // Chapter 2
    
    console.log(nearestChapter({
        "New Beginnings": 1,
        "Strange Developments": 62,
        "The End?": 194,
        "The True Ending": 460
    }, 200)); // The End?
    
    console.log(nearestChapter({
        "Chapter 1a": 1,
        "Chapter 1b": 5
    }, 3)); // Chapter 1b
}


// QUESTION 4: Souvenir Shop
/*
4.Souvenir Shop
On a vacation abroad, you see a souvenir shop and decide to head inside. There are snow globes, postcards, fridge magnets and all the other goodies you'd typically find.
Given an array of prices of things in the store and the amount of money you have, return the maximum number of items you could possibly buy.
Examples
maxItems(["$1", "$1", "$2"], "$3") ➞ 2
maxItems(["$10", "$7", "$2", "$60"], "$20") ➞ 3
maxItems(["$15", "$5", "$30", "$30", "$10"], "$2") ➞ "Not enough funds!"
Notes
    • If you cannot afford anything, return "Not enough funds!"
    • Prices will be whole numbers.
*/
function question4() {
    function maxItems(prices, money) {
        // Remove $ sign and convert to number
        money = parseInt(money.replace(/[^0-9.-]+/g, ""));
        
        // Remove $ from all prices and convert to numbers
        prices = prices
            .map(price => parseInt(price.replace(/[^0-9.-]+/g, "")))
            .sort((a, b) => a - b);  // Sort from cheapest to most expensive
        
        let itemsBought = 0;
        
        // Buy items starting from cheapest
        for (let i = 0; i < prices.length && money > 0; i++) {
            let itemPrice = prices[i];
            
            // Can we afford this item?
            if (money > 0 && (money - itemPrice > 0)) {
                money -= itemPrice;  // Buy it
                itemsBought++;
            }
        }
        
        // Return count or error message
        if (itemsBought > 0) {
            return itemsBought;
        } else {
            return "Not enough funds!";
        }
    }
    
    console.log("Maximum items you can buy:");
    console.log(maxItems(["$1", "$1", "$2"], "$3"));                    // 2
    console.log(maxItems(["$10", "$7", "$2", "$60"], "$20"));           // 3
    console.log(maxItems(["$15", "$5", "$30", "$30", "$10"], "$2"));    // Not enough funds!
}


// QUESTION 5: Find All Digits
/*
5.Find All Digits
Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".
Examples
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0
findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0
findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
Notes
The digits can be discovered in any order.
*/
function question5() {
    function findAllDigits(numbers) {
        let foundDigits = new Set();  // Stores unique digits we've found
        let answerNumber = 0;
        
        // Check each number in the array
        numbers.forEach(number => {
            // Break number into individual digits
            let digits = number.toString().split("").map(Number);
            
            // Add each digit to our collection
            digits.forEach(digit => {
                foundDigits.add(digit);
            });
            
            // Did we find all 10 digits (0-9)?
            if (foundDigits.size === 10 && answerNumber === 0) {
                answerNumber = number;  // Save this number
                return;
            }
        });
        
        // Return the number or error message
        if (answerNumber > 0) {
            return answerNumber;
        } else {
            return "Missing digits!";
        }
    }
    
    console.log("Find number when all digits 0-9 discovered:");
    console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083])); // 5057
    console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381])); // 3370
    console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868])); // Missing digits!
}


// ========================================
// RUN QUESTIONS HERE - Uncomment to run!
// ========================================

// question1();
// question2();
// question3();
// question4();
// question5();