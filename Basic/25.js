//25. Write a JavaScript program to check
// whether a given positive number is a multiple of 3 or a multiple of 7.

const checkNumber = n => {
    if (n % 3 === 0 || n % 7 === 0) return true;
    return false;
}

console.log(checkNumber(12))