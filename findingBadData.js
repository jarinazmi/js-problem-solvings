// PROBLEM 4
// findingBadData

// write a function which takes an array as parameter, we will conceder negative numbers as bad data, so if the array contains any negative number then return the number of bad data 

function findingBadData(arr) {
    // check whether the input is an array or not
    if (!Array.isArray(arr)) {
        return 'Please enter an array';
    }

    // check whether the array contains any negative number or not
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    // return the number of bad data
    return count;
}

// call the function
console.log(findingBadData([-4, -9, -5, -33, -55]));