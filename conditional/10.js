// 10. Write a JavaScript program to construct
// the following pattern, using a nested for loop.
//*
// * *
// * * *
// * * * *
// * * * * *

let a,b, result;

for (let a = 1; a <= 10; a++){
    for (let b = 1; b < a; b++ ){
        result += "*"
    }
    console.log(result);
    result =''
}