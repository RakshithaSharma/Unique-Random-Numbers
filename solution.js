var getNumber = require('./lib/get-number');

// Export a function that returns an array of 50 unique numbers.
// This function is called from `test.js`


// Solution 1 : Using includes()

module.exports = function getNumbers(uniqueNumbersArray) {
    try {
        let finalArray = [];
        // looping here until we get 50 unique numbers
        while (finalArray.length < 50) {
            // Calling the API to get random numbers
            let randomNumber = new Promise((resolve) => {
                getNumber((randomNumber) => {
                    resolve(randomNumber)
                });
            });
            // Checking if finalArray already contains randomNumber. If no, then only we will add it to finalArray
            if (!finalArray.includes(randomNumber)) {
                finalArray.push(randomNumber);
            }
        }
        // finalArray has 50 unique numbers so we will pass it to uniqueNumbersArray to validate the solution
        uniqueNumbersArray(finalArray);
    }
    catch(error) {
        console.error(error);
    }
};


// Solution 2: Using Set()

module.exports = async function getNumbers(uniqueNumbersArray){
    try {
        let finalSet = new Set();
        // looping here until we get 50 unique numbers
        while(finalSet.size < 50) {
            // Calling the API to get random numbers
            let randomNumber = await new Promise((resolve) => {
                getNumber((randomNumber) => {
                resolve(randomNumber)
            });
        });
            // If randomNumber is unique then add it to finalSet.
            finalSet.add(randomNumber)
        }
    // finalSet has 50 unique numbers.
        // Converting it to an array as list must be an array, then pass it to uniqueNumbersArray for validation
        uniqueNumbersArray([...finalSet])
    } catch(error) {
        console.error(error)
    }
};
