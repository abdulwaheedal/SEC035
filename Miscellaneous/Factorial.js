// Factorial of a number
function calculateFactorial() {
    const num = Number(prompt("Enter a number to find its factorial:"));

    if (isNaN(num) || num < 0) {
        console.log("Please enter a non-negative number");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(`Factorial of ${num} is ${factorial}`);
}

calculateFactorial();