//7. Write a JavaScript program to check whether a number is even or not.
const evenOrOdd = num => {
    if (num % 2 === 0){
        return `${num} is even`
    } else {
        return `${num} is odd`
    }
}

console.log(evenOrOdd(12))