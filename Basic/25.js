//25. Write a JavaScript program to check
// whether a given positive number is a multiple of 3 or a multiple of 7.

const checkNumber = n => {
    if (n > 0){
        if (n % 3 === 0 || n % 7 === 0) return true;
        return false;
    } return "Please enter positive number"

}

console.log(checkNumber(-12))