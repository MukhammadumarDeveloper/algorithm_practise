const celciustoF = celsius => {
    let temp = celsius * 9/5 + 32;

    return temp;
}

const fahrenheitToC = fahrenheit => {
    let tem = (fahrenheit - 32) * 5/9;

    return tem.toFixed(2)
}
console.log(celciustoF(60))
console.log(fahrenheitToC(45))

