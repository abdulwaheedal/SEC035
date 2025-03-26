// Basic calculator
function calculator() {
    const num1 = Number(prompt("Enter first number:"));
    const num2 = Number(prompt("Enter second number:"));
    const operation = prompt("Enter operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case '-':
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case '*':
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case '/':
            if (num2 === 0) {
                console.log("Division by zero is not allowed");
            } else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            }
            break;
        default:
            console.log("Invalid operation. Use +, -, *, or /");
    }
}

calculator();