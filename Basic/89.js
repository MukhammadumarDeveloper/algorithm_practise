let a = 10, b = 20;

const calc = expression => {
    switch (expression){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b;
        case "%":
            return a % b;
        default:
            return "It is not a valid expression for this calculator"
    }
}

console.log(calc("+"))