//Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15.

const fifteen = num => {
    if(num > 15){
        return num;
    } else if (num === 15){
        return 15;
    } else {
        return "bye bye"
    }
}

console.log(fifteen(1))