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

// call the function
// console.log(evenOdd("chatgpt"));