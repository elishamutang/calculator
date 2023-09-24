// Arithmetic operations
function add(arr) {
    arr.findIndex((current,idx) => {
        if(current == "+") {
            firstNum = arr.slice(0,idx);
            secondNum = arr.slice(idx+1);
        }
    });
    
    if(firstNum.length > 1) {
        firstNum = firstNum.join('');
    }

    if(secondNum.length > 1) {
        secondNum = secondNum.join('');
    }

    return parseInt(firstNum) + parseInt(secondNum);
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
function operate(firstNo) {
    firstArr.push(firstNo);
    console.log(firstArr);
    if(firstArr.includes("+")) {
        firstArr.findIndex((current) => {
            if(current == "+") {
                operator = current;
                return operator;
            }
        });
    }
};

// Clear button function

function equalBtn() {
    if(operator == "+") {
        result = add(firstArr);
        firstArr = [];
        operator = [];
        console.log(result);
        return result;
    }
}

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
            totalDisplay.innerHTML = "";
            firstArr = [];

        } else if(event.target.textContent == "Del") {

            opsDisplay.removeChild(opsDisplay.lastElementChild);
            firstArr.splice(0, 1);

        } else if(event.target.textContent == "=") {

            equalBtn(event);
            opsDisplay.innerHTML = `<h2 class='result'>${result}</h2>`;
            totalDisplay.innerHTML = `<h2 class='result' id='total'>${result}</h2>`;

        } else {

            if(opsDisplay.innerHTML.includes('result')) {
                opsDisplay.innerHTML = '';
            }

            displayText.innerHTML = event.target.textContent;
            opsDisplay.append(displayText);
            firstNum = event.target.textContent;
            operate(firstNum);
            
        }
    })
})