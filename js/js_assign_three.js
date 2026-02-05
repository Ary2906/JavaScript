// RECUSIVE FUNC IN FIBONACCI SERIES

function question1() {
    function fibNumber(n) {
        // Base cases
        if (n === 0) return 0;
        if (n === 1) return 1;
        
        // Recursive case - function calls itself!
        return fibNumber(n - 1) + fibNumber(n - 2);
    }
    
    function fibonacci(n) {
        if (n === 0) return [];
        if (n === 1) return [0];
        
        let series = [];
        for (let i = 0; i < n; i++) {
            series.push(fibNumber(i));  // Uses recursive function
        }
        return series;
    }
    
    console.log("Fibonacci Series:");
    console.log(fibonacci(0));  // []
    console.log(fibonacci(1));  // [0]
    console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
    console.log(fibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
}

// RECURSIVE IN FACTORIAL SERIES
function question2() {
    function factorial(n) {
        // Base case
        if (n === 0 || n === 1) return 1;
        
        // Recursive case - calls itself!
        return n * factorial(n - 1);
    }
    
    console.log("Factorial:");
    console.log(factorial(5));  // 120
    console.log(factorial(4));  // 24
    console.log(factorial(0));  // 1
}


// HERE WE SORTED WITHOUT USING LIBRARY FUNC WHERE I USED 
// Ascending: swap if arr[j] > arr[j+1]
// Descending: swap if arr[j] < arr[j+1]


function QUESTION3() {
    // Bubble Sort - Ascending
    function sortNumsAscending(numbers) {
        let arr = [...numbers]; // Copy array to avoid modifying original
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        
        return arr;
    }
    
    // Bubble Sort - Descending
    function sortNumsDescending(numbers) {
        let arr = [...numbers];
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {  // Changed condition
                    // Swap
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        
        return arr;
    }
    
    console.log("Sort Ascending:");
    console.log(sortNumsAscending([1, 2, 10, 50, 5]));        // [1, 2, 5, 10, 50]
    console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); // [-95, -24, 4, 29, 80, 85]
    
    console.log("Sort Descending:");
    console.log(sortNumsDescending([1, 2, 10, 50, 5]));        // [50, 10, 5, 2, 1]
    console.log(sortNumsDescending([80, 29, 4, -95, -24, 85])); // [85, 80, 29, 4, -24, -95]
}


// ranking the words
function question4() {
    function getHashTags(headline) {
        // Split into words
        let words = headline.split(' ');
        
        // Create array of objects with word and original index
        let wordData = words.map((word, index) => ({
            word: word.toLowerCase(),
            length: word.length,
            index: index
        }));
        
        // Sort by length (descending), then by index (ascending for ties)
        wordData.sort((a, b) => {
            if (b.length !== a.length) {
                return b.length - a.length;
            }
            return a.index - b.index;
        });
        
        // Get top 3 unique lengths
        let uniqueLengths = [...new Set(wordData.map(item => item.length))];
        let top3Lengths = uniqueLengths.slice(0, 3);
        
        // Get all words that match these top 3 lengths
        let result = wordData
            .filter(item => top3Lengths.includes(item.length))
            .map(item => '#' + item.word);
        
        return result;
    }
    
    console.log(getHashTags("How the Avocado amazingly Became famous the Fruit of the Global Trade"));
}


//iteam name with its quantity

function question8() {
    function itemsPurchased(store, wallet) {
        // Remove $ and commas, convert to number
        let budget = parseInt(wallet.replace(/[^0-9]/g, ""));
        let affordable = [];
        
        // Check each item
        for (let item in store) {
            let price = parseInt(store[item].replace(/[^0-9]/g, ""));
            
            if (price <= budget) {
                let quantity = budget / price;
                affordable.push(item + ": " + quantity);
            }
        }
        
        if (affordable.length === 0) return "Nothing";
        
        // Sort alphabetically
        return affordable.sort();
    }
    
    // Test examples
    console.log(itemsPurchased({Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20"}, "$300"));
    console.log(itemsPurchased({Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2"}, "$100"));
    console.log(itemsPurchased({Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200"}, "$1"));
}

question8();