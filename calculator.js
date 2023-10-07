// Arithmetic operations
function add(firstArr, secondNum) {

    if(Number.isInteger(Number(firstArr)) == true && Number.isInteger(Number(secondNum)) == true) {

        return parseInt(firstArr) + parseInt(secondNum);  

    }

    additionResult = parseFloat((parseFloat(firstArr) + parseFloat(secondNum)).toFixed(9));
    return additionResult;

}

function subtract(firstArr, secondNum) {

    if(Number.isInteger(Number(firstArr)) == true && Number.isInteger(Number(secondNum)) == true) {

        return parseInt(firstArr) - parseInt(secondNum);

    }

    subtractResult = parseFloat((parseFloat(firstArr) - parseFloat(secondNum)).toFixed(9));
    return subtractResult;

}

function multiply(firstArr, secondNum) {

    if(Number.isInteger(Number(firstArr)) == true && Number.isInteger(Number(secondNum)) == true) {

        return parseInt(firstArr) * parseInt(secondNum);

    }

    multiplyResult = parseFloat((parseFloat(firstArr) * parseFloat(secondNum)).toFixed(9));
    return multiplyResult;

}

function divide(firstArr, secondNum) {

    if(secondNum == 0) {

        return "bruh";

    }

    divideResult = parseFloat((parseFloat(firstArr) / parseFloat(secondNum)).toFixed(9));
    return divideResult;
    
}

// Operate function: takes an operator and 2 numbers and calls one of the above functions
function operate(firstNum, operator, secondNum) {

    // If more than 1 element exists in array, join them.
    if(firstNum.length >= 1) {

        firstNum = firstNum.join('');

    } else if(firstNum.length == 0) {

        firstNum = 0;

    }

    if(secondNum.length >= 1) {

        secondNum = secondNum.join('');
        
    } else if(secondNum.length == 0) {

        secondNum = 0;

    }

    // Selects the correct operation
    if(operator == "+") {

        console.log(firstNum, operator, secondNum);
        return add(firstNum, secondNum);

    } else if(operator == "-") {

        console.log(firstNum, operator, secondNum);
        return subtract(firstNum, secondNum);

    } else if(operator == "x") {

        console.log(firstNum, operator, secondNum);
        return multiply(firstNum, secondNum);

    } else if(operator == "÷") {

        console.log(firstNum, operator, secondNum);
        return divide(firstNum, secondNum);

    }

};

// When user presses "AC" button, it will reset the calculator.
function allClear() {

    opsDisplay.innerHTML = "";
    defaultText.className = "initial";
    opsDisplay.append(defaultText);
    totalDisplay.innerHTML = "";

    inputNum = [];
    firstArr = [];
    runningTotal = 0;
    operator = [];

}

function calculatorLogic(event) {

    let displayText = document.createElement("h2");
    displayText.className = "display";


    // Clears everything button and set default value.
    if(event.target.textContent == "AC") {

        allClear();

    // A delete button. For when a user wants to remove his/her last number input.
    } else if(event.target.textContent == "Del") {


        // Prevents user from deleting initial value.
        if(opsDisplay.innerHTML.includes("initial")) {

            return;

        // Reverts to initial value after completing operation when Del key is pressed.
        } else if(opsDisplay.innerHTML.includes("result")) {

            opsDisplay.innerHTML = '';
            totalDisplay.innerHTML = '';
            defaultText.className = "initial";
            opsDisplay.append(defaultText);

        } else {

            // For last element child, when user presses Del key it will revert to initial value.
            if(opsDisplay.children.length == 1) {

                opsDisplay.removeChild(opsDisplay.lastElementChild);
                opsDisplay.append(defaultText);
                inputNum = [];

            } else {

                opsDisplay.removeChild(opsDisplay.lastElementChild);
                inputNum.splice(-1, 1);

            }
        }

        runningTotal = 0;
        firstArr = [];

    // Equals button.
    } else if(event.target.textContent == "=") {


        // When there is a running total (i.e user performs a simple operation such as 6+3=9 or 6+= 12), returned result
        // will be stored in runningTotal.
        if(runningTotal !=0) {


            // To prevent error when user repeatedly presses "=" after operation.
            if(operator.length == 0 && inputNum.length == 0) {

                return;
            
            }

            firstArr = runningTotal;
            totalDisplay.innerHTML = `<h2 class='result-operator'>${firstArr} ${operator} ${inputNumCheck = inputNum.length
                                        > 1 ? inputNum.join('') : inputNum} = </h2>`;
        
        
        // When a first time operation is performed (i.e runningTotal = 0).
        } else if(runningTotal == 0) {


            // Prevents undefined error if user repeatedly presses "=" without any inputs.
            if(firstArr.length == 0 && inputNum.length == 0) {

                return;
                

            // Prevents undefined error if user repeatedly presses "=" after inputting FIRST number.
            } else if(firstArr.length != 0 && inputNum.length == 0) {


                // Assigns inputNum as first user input if user presses an operator sign and "=" sign without 2nd input.
                if(operator.length !=0 && inputNum.length == 0) {

                    inputNum = firstArr;

                } else {

                    return;
        
                }
            
            // Prevents undefined error if user inputs a number and presses "=" immediately.
            } else if(firstArr.length == 0 && inputNum.length != 0) {

                return;

            }

            // For first time operation, if user inputs more than 1 digit, join the first input.
            totalDisplay.innerHTML = `<h2 class='result-operator'>${firstArrCheck = firstArr.length > 0 ? firstArr.join('') : firstArr} 
                                    ${operator} ${inputNumCheck = inputNum.length > 0 ? inputNum.join('') : inputNum} = </h2>`;

        }    

        runningTotal = operate(firstArr, operator, inputNum);
        firstArr = runningTotal;
        console.log(runningTotal);
        
        opsDisplay.innerHTML = `<h2 class='result'>${runningTotal}</h2>`;

        inputNum = [];
        operator = [];
        


    // Code from here is when a user presses any of the operator signs
    } else if(event.target.textContent == "+" || event.target.textContent == "-" || event.target.textContent == "x" ||
    event.target.textContent == "÷") {

        // To copy children from opsDisplay over to totalDisplay.
        let children = Array.from(opsDisplay.children);

        // For appending operator sign
        const operatorNode = displayText;
        operatorNode.className = "operator";
        operatorNode.textContent = event.target.textContent;

        // For when user performs chain operation (eg. 12+7-5*3 should equal 42)
        if(inputNum.length != 0 && firstArr.length != 0) {

            if(runningTotal !=0) {

                firstArr = runningTotal;

            }

            runningTotal = operate(firstArr, operator, inputNum);
            operator = event.target.textContent;

            opsDisplay.innerHTML = `<h2 class='result'>${runningTotal}</h2>`;
            totalDisplay.innerHTML = opsDisplay.innerHTML;
            totalDisplay.append(operatorNode);

            console.log(runningTotal);

        // For when user performs operation such as (23+7-20/x5 should equal 5)
        // and for when user inputs number and keeps pressing operator sign (e.g 3+++)
        } else if(inputNum.length == 0 && firstArr.length != 0) {

            if(runningTotal !=0) {

                firstArr = runningTotal;

                if(operator.length !=0) {

                    inputNum = runningTotal;
                    runningTotal = operate(firstArr, operator, inputNum);

                }
            
            // When user inputs number and keeps pressing an operator sign (e.g 3+++) without inputting next number.
            } else {

                inputNum = firstArr;
                runningTotal = operate(firstArr, operator, inputNum);

            }

            operator = event.target.textContent;

            console.log(`runningTotal: ${runningTotal}`);

            opsDisplay.innerHTML = `<h2 class='result'>${runningTotal}</h2>`;
            totalDisplay.innerHTML = opsDisplay.innerHTML;
            totalDisplay.append(operatorNode);

        } else {
            
            firstArr = inputNum;
            operator = event.target.textContent;
            children.forEach((child) => child.setAttribute("class", "firstOp"));

            // Copy and paste values from opsDisplay to totalDisplay along with operator.
            children.forEach((child) => {

                clone = child.cloneNode(true);
                totalDisplay.append(clone);

            });

            totalDisplay.append(operatorNode);

        }

        // Reset input. Everytime user enters number and press operator sign, numbers before sign is captured in firstArr above.
        inputNum = [];

    } else if (event.target.textContent == "%") {

        opsDisplay.innerHTML = '';

        // If user presses '%' key after pressing '=', it will take the runningTotal and convert to its percentage value.
        if(opsDisplay.children && !totalDisplay.innerHTML.includes('result-operator')) {

            if(inputNum.length > 1) {

                inputNum = inputNum.join('') / 100;

            } else {

                console.log("yes");
                inputNum = inputNum / 100;

            }

            displayText.innerHTML = inputNum;
            opsDisplay.append(displayText);

        } else {

            firstArr = firstArr / 100;
            runningTotal = firstArr;

            displayText.innerHTML = firstArr;
            opsDisplay.append(displayText);

        }

    }
    // Code below is when user presses ONLY number keys and not any operator signs or AC or Del keys.
    else {

        console.log(event.key)

        // Resets opsDisplay for new user input.
        if(opsDisplay.innerHTML.includes('result') || opsDisplay.innerHTML.includes('firstOp') || opsDisplay.innerHTML.includes('initial')) {


            // Prevents user from inputting "." as first input.
            if(event.target.textContent == ".") {

                // Resets calculator when user presses "=" and then decides to press any other buttons EXCEPT operator signs.
                if(firstArr.toString().length != 0 && totalDisplay.innerHTML.includes('result-operator')) {

                    allClear();

                } else {

                    opsDisplay.innerHTML = '';
                    opsDisplay.append(defaultText);

                }

                inputNum = [defaultText.textContent];
                defaultText.className = "display";
                

            } else if(totalDisplay.innerHTML.includes('result-operator')) {

                allClear();
                opsDisplay.innerHTML = '';

            } else {

                opsDisplay.innerHTML = '';

            }

        }

        // If user wants to input floating numbers such as 0.1, 0.2, 0.3 etc.
        if(inputNum[0] == 0 && inputNum[1] != ".") {

            if(event.target.textContent == ".") {

                lastNum = event.target.textContent;

            } else {

                inputNum.splice(0,1);
                opsDisplay.innerHTML = '';

            }
        }

        // Prevents user from inserting more than one "." inside calculator.
        if(inputNum.includes(".")) {

            if(event.target.textContent == ".") {

                return;

            }
        }

        // Updates display when numbers are pressed
        displayText.innerHTML = event.target.textContent;
        opsDisplay.append(displayText);

        lastNum = event.target.textContent;
        inputNum.push(lastNum);
        console.log(inputNum);
    }

}

// Initial declaration (globals, need to avoid)
let operator = [];
let inputNum = [];
let firstArr = [];
let runningTotal = 0;

// Calculator display

// Targets operations display
let opsDisplay = document.getElementById("opsDisplay");
let defaultText = document.createElement("h2");
defaultText.className = "initial";
defaultText.textContent = 0;
opsDisplay.append(defaultText);

// Targets running total display
let totalDisplay = document.getElementById("totalDisplay");

// Targets all buttons in calculator numpad
let buttons = document.querySelectorAll(".button");

 function myCalculator() {

    // Links each button in numpad to do something
    buttons.forEach((button) => {
        button.addEventListener("mousedown", calculatorLogic);
        button.addEventListener("keydown", calculatorLogic);
    })
}

myCalculator();