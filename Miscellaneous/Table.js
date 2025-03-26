// Multiplication table of a number
function multiplicationTable() {
    const num = Number(prompt("Enter a number for multiplication table:"));

    if (isNaN(num)) {
        console.log("Please enter a valid number");
        return;
    }

    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable();