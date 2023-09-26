// Arithmetic operations
function add(firstArr, secondNum) {
    
    if(firstArr.length > 1) {
        firstArr = firstArr.join('');
    }

    if(secondNum.length > 1) {
        secondNum = secondNum.join('');
    }

    return parseInt(firstArr) + parseInt(secondNum);
}

function subtract(firstArr, secondNum) {

    if(firstArr.length > 1) {
        firstArr = firstArr.join('');
    }

    if(secondNum.length > 1) {
        secondNum = secondNum.join('');
    }

    return parseInt(firstArr) - parseInt(secondNum);

}

function multiply(arr) {
    return first*second;
}

function divide(arr) {
    return first/second;
}

// Initial declaration
let firstNum, operator, secondNum;
let inputNum = [];

// Operate function: takes an operator and 2 numbers and calls one of the above functions
function operate(firstNum, operator, secondNum) {

    if(operator == "+") {

        console.log(firstNum, operator, secondNum);
        return add(firstNum, secondNum);

    } else if(operator == "-") {

        console.log(firstNum, operator, secondNum);
        return subtract(firstNum, secondNum);

    }

};

// Calculator display

// Targets operations display
let opsDisplay = document.getElementById("opsDisplay");

// Targets running total display
let totalDisplay = document.getElementById("totalDisplay");

// Targets all buttons in calculator numpad
let buttons = document.querySelectorAll(".button");

// Links each button in numpad to do something
buttons.forEach((button) => {
    button.addEventListener("mousedown", function(event) {

        let displayText = document.createElement("h2");
        displayText.className = "display";

        if(event.target.textContent == "Clear") {

            opsDisplay.innerHTML = "";
            totalDisplay.innerHTML = "";
            inputNum = [];

        } else if(event.target.textContent == "Del") {

            opsDisplay.removeChild(opsDisplay.lastElementChild);
            inputNum.splice(0, 1);

        } else if(event.target.textContent == "=") {

            result = operate(firstArr, operator, inputNum);

            firstArr = [];
            inputNum = [];
            operator = [];
            
            opsDisplay.innerHTML = `<h2 class='result'>${result}</h2>`;
            totalDisplay.innerHTML = `<h2 class='result' id='total'>${result}</h2>`;

        } else if(event.target.textContent == "+" || event.target.textContent == "-" || event.target.textContent == "X" ||
            event.target.textContent == "/") {

            operator = event.target.textContent;
            firstArr = inputNum;
            inputNum = [];

            let children = Array.from(opsDisplay.children);

            children.forEach((child) => child.setAttribute("class", "firstOp"));

        } else {

            if(opsDisplay.innerHTML.includes('result')) {

                opsDisplay.innerHTML = '';

            } else if(opsDisplay.innerHTML.includes('firstOp')) {

                opsDisplay.innerHTML = '';

            }

            displayText.innerHTML = event.target.textContent;
            opsDisplay.append(displayText);

            firstNum = event.target.textContent;
            inputNum.push(firstNum);
            console.log(inputNum);


            operate(firstNum);

        }
    })
})