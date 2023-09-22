// first, second (addition, subtraction, multiplication and division)
function add(first, second) {
    return first+second;
}

function subtract(first, second) {
    return first-second;
}

function multiply(first, second) {
    return first*second;
}

function divide(first, second) {
    return first/second;
}

// Declaring first number, operator and second number.
let firstNum, operator, secondNum;

// Operate function: takes an operator and 2 numbers and calls one of the above functions
function operate(first, operator, second) {
    if(operator == "+") {
        result = add(first, second);
    } else if(operator == "-") {
        result = subtract(first, second);
    } else if(operator == "*") {
        result = multiply(first, second);
    } else {
        result = divide(first, second);
    }
    return result;
};

console.log(operate(1,"+",3));


// Calculator body
// Generating numpad

let calBody = document.getElementById("calBody");

// Available numpad width of (400-80)px
const rows = (400-80)/80;

for(let i=0; i<rows; i++) {
    let calNumpad = document.createElement("div");
    calNumpad.className = "numpad";
    calBody.append(calNumpad);
}