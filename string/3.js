// 3. Write a JavaScript function to split a string
// and convert it into an array of words.

function string_to_array(input){
    let result = input.trim().split(" ")
    return result
}

console.log(string_to_array("hello world"))