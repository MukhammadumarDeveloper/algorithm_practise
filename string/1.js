// 1. Write a JavaScript function to check whether an `input` is a string or not.

const stringOrNot = input => {
    if (typeof input == 'string') return true;
    return false;
}

console.log(stringOrNot([1,2]))