const stringOrNot = input => {
    if (typeof input == 'string') return true;
    return false;
}

console.log(stringOrNot([1,2]))