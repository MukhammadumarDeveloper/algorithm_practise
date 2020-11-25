const convertHour = num => {
    let h = Math.floor(num % 60);
    let m = num % 60;

    let result = `${h} + ${m}`;
    return result;
}

console.log(convertHour(12020))