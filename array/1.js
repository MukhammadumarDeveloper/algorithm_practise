// Write a JavaScript function to check whether an `input` is an array or not.

const is_array = input => {
    if (typeof input === "object"){
        return true;
    } else {
        return false;
    }
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));