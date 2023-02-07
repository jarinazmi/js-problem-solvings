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

// call the function
// console.log(gemsToDiamond(100, 5, 1));