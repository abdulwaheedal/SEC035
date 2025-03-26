// Greatest of two numbers
function findGreatest() {
    const num1 = Number(prompt("Enter first number:"));
    const num2 = Number(prompt("Enter second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers");
        return;
    }

    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}`);
    } else {
        console.log("Both numbers are equal");
    }
}

findGreatest();