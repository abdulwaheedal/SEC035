// Check if a number is even or odd
function checkEvenOdd() {
    const num = Number(prompt("Enter a number to check if it's even or odd:"));

    if (isNaN(num)) {
        console.log("Please enter a valid number");
        return;
    }

    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

checkEvenOdd();