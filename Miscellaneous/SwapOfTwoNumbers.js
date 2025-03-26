// Swap of two numbers
function swapNumbers() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers");
        return;
    }

    console.log(`Before swap: num1 = ${num1}, num2 = ${num2}`);

    // Using a temporary variable
    let temp = num1;
    num1 = num2;
    num2 = temp;

    console.log(`After swap: num1 = ${num1}, num2 = ${num2}`);
}

swapNumbers();