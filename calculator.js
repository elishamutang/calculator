// Arithmetic operations
function add(arr) {
    return parseInt(arr[0]) + parseInt(arr[1]);
}

function subtract(arr) {
    return first-second;
}

function multiply(arr) {
    return first*second;
}

function divide(arr) {
    return first/second;
}

// Declaring first number, operator and second number.
let firstNum, operator, secondNum;
let firstArr = [];

// Operate function: takes an operator and 2 numbers and calls one of the above functions
function operate(firstNum) {
    firstArr.push(firstNum);
    console.log(firstArr);
    if(firstArr.includes("+")) {
        firstArr.findIndex(function(current, idx) {
            if(current == "+") {
                operator = firstArr.splice(idx, 1)
                console.log(operator);
                return firstArr;
            }
        });
    }
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
            firstArr = [];
        } else if(event.target.textContent == "Del") {
            opsDisplay.removeChild(opsDisplay.lastElementChild);
            firstArr.splice(0, 1);
        } else if(event.target.textContent == "=") {
            if(operator == "+") {
                sum = add(firstArr);
                firstArr = [];
                console.log(sum);
            }
        } else {
            opsDisplay.append(displayText);
            displayText.innerHTML = event.target.textContent;
            firstNum = event.target.textContent;
            operate(firstNum);
        }
    })
})