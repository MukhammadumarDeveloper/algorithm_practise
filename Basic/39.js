// 39. Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.
function rangeIn(a,b) {
    let sum = a + b;
    if (sum >= 50 && sum <= 80){
        return 65
    } else {
        return 80
    }
    // sum >= 50 && sum <=80 ? 65 : 80;
}

console.log(rangeIn(12,70))