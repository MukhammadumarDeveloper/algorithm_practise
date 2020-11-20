// 4. Write a JavaScript conditional statement to find
// the largest of five numbers.
// Display an alert box to show the result.
const largestNumber = (a, b, c, d, e) => {
    if (a>b && a > c  && a > d && a > e){
        return `The largest number is ${a}`;
    } else if (b > a && b > c && b > d && b > e){
        return `The largest number is ${b}`;
    } else if (c > a && c > b && c > d && c > e){
        return `The largest number is ${c}`;
    } else if (d > a && d > b && d > c && d > e){
        return `The largest number is ${d}`;
    } else if (e > a && e > b && e > c && e > d){
        return `The largest number is ${e}`;
    }
}

console.log(largestNumber(-5,-2,-3,-4,-5))