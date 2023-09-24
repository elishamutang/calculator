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

// Update calculator display

// Targets operations display
let opsDisplay = document.getElementById("opsDisplay");

// Targets running total display
let totalDisplay = document.getElementById("totalDisplay");

// Targets all buttons in calculator numpad
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("mousedown", function(event) {
        let displayText = document.createElement("h2");
        displayText.className = "display";

        if(event.target.textContent == "Clear") {
            opsDisplay.innerHTML = "";
        } else if(event.target.textContent == "Del") {
            opsDisplay.removeChild(opsDisplay.lastElementChild);
        } else {
            opsDisplay.append(displayText);
            displayText.innerHTML = event.target.textContent;
            console.log(event.target.textContent);
        }
    })
})