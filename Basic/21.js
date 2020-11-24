//21. Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

const addPy = str => {
    str = str.toLowerCase();
    if (str.startsWith("py")){
        return str
    } else {
        return `py${str}`
    }
}

console.log(addPy("node"))