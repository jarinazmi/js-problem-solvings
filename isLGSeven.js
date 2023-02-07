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

// call the function
console.log(isLGSeven(7));