const countStrings = word => {
    let count = 0;

    for (w of word){
        if (w === 'a' || w === 'i' || w === 'o' || w === 'u' || w === 'e'){
            count ++
        }
    }

    return count;
}

console.log(countStrings('Shaxmat'))