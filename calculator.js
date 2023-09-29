// Arithmetic operations
function add(firstArr, secondNum) {

    return parseInt(firstArr) + parseInt(secondNum);

}

function subtract(firstArr, secondNum) {

    return parseInt(firstArr) - parseInt(secondNum);

}

function multiply(firstArr, secondNum) {

    return parseInt(firstArr) * parseInt(secondNum);

}

function divide(firstArr, secondNum) {

    let divideResult = parseInt(firstArr) / parseInt(secondNum);
    
    return divideResult;

}



// Initial declaration (globals, need to avoid)
let operator = [];
let inputNum = [];
let firstArr = [];
let runningTotal = 0;

// Operate function: takes an operator and 2 numbers and calls one of the above functions
function operate(firstNum, operator, secondNum) {

    // If more than 1 element exists in array, join them.
    if(firstNum.length > 1) {
        firstNum = firstNum.join('');
    }

    if(secondNum.length > 1) {
        secondNum = secondNum.join('');
    }

    // Selects the correct operation
    if(operator == "+") {

        console.log(firstNum, operator, secondNum);
        return add(firstNum, secondNum);

    } else if(operator == "-") {

        console.log(firstNum, operator, secondNum);
        return subtract(firstNum, secondNum);

    } else if(operator == "*") {

        console.log(firstNum, operator, secondNum);
        return multiply(firstNum, secondNum);

    } else if(operator == "/") {

        console.log(firstNum, operator, secondNum);
        return divide(firstNum, secondNum);

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

        if(event.target.textContent == "AC") {

            opsDisplay.innerHTML = "";
            totalDisplay.innerHTML = "";
            inputNum = [];
            firstArr = [];
            runningTotal = 0;
            operator = [];

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

        } else if(event.target.textContent == "+" || event.target.textContent == "-" || event.target.textContent == "*" ||
        event.target.textContent == "/") {


            let children = Array.from(opsDisplay.children);

            // For when user performs chain operation (eg. 12+7-5*3 should equal 42)
            // First-time running total is stored in firstArr. 
            if(inputNum.length != 0 && firstArr.length != 0) {

                if(runningTotal !=0) {

                    firstArr = runningTotal;
                    runningTotal = operate(firstArr, operator, inputNum);

                } else {

                    runningTotal = operate(firstArr, operator, inputNum);

                }

                operator = event.target.textContent;
                opsDisplay.innerHTML = `<h2 class='result'>${runningTotal}</h2>`;
                console.log(runningTotal);

            // For when user performs operation such as (23+7-20/x5 should equal 5)
            // For when user inputs number and keeps pressing operator sign (e.g 3+++)
            } else if(inputNum.length == 0 && firstArr.length != 0) {

                if(runningTotal !=0) {
                    
                    firstArr = runningTotal;
                    inputNum = runningTotal;

                    runningTotal = operate(firstArr, operator, inputNum);

                } else {

                    inputNum = firstArr;

                    runningTotal = operate(firstArr, operator, inputNum);

                }

                operator = event.target.textContent;
                console.log(runningTotal);
                opsDisplay.innerHTML = `<h2 class='result'>${runningTotal}</h2>`;

            } else {
                
                operator = event.target.textContent;
                console.log(`Current: ${operator}`);
                children.forEach((child) => child.setAttribute("class", "firstOp"));

            }
            
            // Reset input. Everytime user enters number and press sign, numbers before sign is captured in firstArr.
            firstArr = inputNum;
            inputNum = [];

        } else {

            // This section is for number keys on the keypad.

            // Resets opsDisplay
            if(opsDisplay.innerHTML.includes('result') || opsDisplay.innerHTML.includes('firstOp')) {

                opsDisplay.innerHTML = '';

            }

            // Updates display when numbers are pressed
            displayText.innerHTML = event.target.textContent;
            opsDisplay.append(displayText);

            lastNum = event.target.textContent;
            inputNum.push(lastNum);
            console.log(inputNum);

        }
    })
})