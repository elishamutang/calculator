// Operations (addition, subtraction, multiplication and division)
function add(operations) {
    const input = operations.split("");
    return parseInt(input[0]) + parseInt(input[2]);
}

function subtract(operations) {
    const input = operations.split("");
    return parseInt(input[0]) - parseInt(input[2]);
}

function multiply(operations) {
    const input = operations.split("");
    return parseInt(input[0]) * parseInt(input[2]);
}

function divide(operations) {
    const input = operations.split("");
    return parseInt(input[0]) / parseInt(input[2]);
}

// Declaring first number, operator and second number.
let firstNum, operator, secondNum;

console.log(add("3+5"));
console.log(subtract("3+5"));
console.log(multiply("3+5"));
console.log(divide("3+5"));