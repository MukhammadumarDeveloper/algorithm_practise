//18. Write a JavaScript program to check two given numbers
// and return true if one of the number is 50 or if their sum is 50.

const checkNumber = (a, b) => {
    return ((a+b === 50) || a === 50 || b === 50)
}