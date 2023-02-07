//PROBLEM 1: Mind Game 
// Write a function that takes an input as a parameter, multiplies it with 3, adds 10 with it, divides it with 2, subtracts 5 from it and returns the result.

function mindGame(num) {
    // check whether the input is a number or not
    if (typeof num !== 'number') {
        return 'Please enter a number';
    }

    // multiply the input with 3
    let result = num * 3;

    // add 10 with the result
    result += 10;

    // divide the result with 2
    result /= 2;

    // subtract 5 from the result
    result -= 5;

    // return the result
    return result;
}




// -----------------------------------------------------


// PROBLEM 2
// evenOdd

// write a function which takes a string as parameter and count the character in that, if the number of character is even then return "even" otherwise return "odd"

function evenOdd(str) {
    // check whether the input is a string or not
    if (typeof str !== 'string') {
        return 'Please enter a string';
    }

    // count the number of character
    let count = str.length;

    // check whether the number of character is even or odd
    if (count % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}



// -----------------------------------------------------


// PROBLEM 3
// isLGSeven

// write a function which takes a number as parameter and check whether the number is greater than 7 or not, if the number is less than 7 then  subtract the number from 7 and return the result, otherwise return the double of the number.

function isLGSeven(num) {
    // check whether the input is a number or not
    if (typeof num !== 'number') {
        return 'Please enter a number';
    }

    // check whether the number is greater than 7 or not
    if (num > 7) {
        return num * 2;
    } else {
        return num - 7;
    }
}




// -----------------------------------------------------


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



// -----------------------------------------------------



// PROBLEM 5
// gemsToDiamond

// write a function that takes 3 numbers as parameters, multiply the first number with 21, second number with 32, third number with 43 and add all the result, if the result is more than 2000, subtract 2000 from the result and return the result, otherwise return the double of the result.

function gemsToDiamond(num1, num2, num3) {
    // check whether the input is a number or not
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return 'Please enter a number';
    }

    // multiply the first number with 21
    let result = num1 * 21;

    // multiply the second number with 32
    result += num2 * 32;

    // multiply the third number with 43
    result += num3 * 43;

    // check whether the result is more than 2000 or not
    if (result > 2000) {
        return result - 2000;
    } else {
        return result;
    }
}
