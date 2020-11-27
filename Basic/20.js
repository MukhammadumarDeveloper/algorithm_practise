//20. Write a JavaScript program to check from two given integers,
// whether one is positive and another one is negative.
const positiveOrNegative = (a,b) => {
    if ((a > 0 && b < 0) || (a < 0 && b > 0) ) return true;
    return false
}

console.log(positiveOrNegative(12,-12))