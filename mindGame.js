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

// call the function
// console.log(mindGame(33));