const display = document.querySelector("#display");
let num1;
let num2;
let mathFunctionPressed = false;
let selectedFunction = "";

//Activate the buttons
//Activate the number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener("click", () =>{
        if(!mathFunctionPressed){
            display.textContent += button.textContent;
        } else {
            display.textContent = button.textContent;
            mathFunctionPressed = false;
        }
    });
});

//Activate the decimal
const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
    if(!display.textContent.includes(".")){
        display.textContent += ".";
    }
})

//Activate the clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clear());

//Activate division button
const divisionButton = document.querySelector("#division");
divisionButton.addEventListener("click", () => divide());

//Activate multiplcation button
const multiplcationButton = document.querySelector("#multiplication");
multiplcationButton.addEventListener("click", () => multiply());

//Activate subtraction button
const subtractionButton = document.querySelector("#subtraction");
subtractionButton.addEventListener("click", () => subtract());

//Activate addition button
const additionButton = document.querySelector("#addition");
additionButton.addEventListener("click", () => add());

//Activate the result button
const resultButton = document.querySelector("#result");
resultButton.addEventListener("click", () => results());

//Activate negation button
const negateButton = document.querySelector("#negation");
negateButton.addEventListener("click", () => negateNumber());

//Calculator functions
//Clear display
function clear(){
    display.textContent = "";
    num1 = 0;
    num2 = 0;
    mathFunctionPressed = false;
    selectedFunction = "";
}

//Calculate results
function results(){
    num2 = Number.parseFloat(display.textContent);
    if(isNaN(num2)){
        alert("Nope");
        return;
    }

    switch(selectedFunction){
        case "addition":
            addNumbers(num1, num2);
            break;
        case "subtraction":
            subtractNumbers(num1, num2);
            break;
        case "multiplication":
            multiplyNumbers(num1, num2);
            break;
        case "division":
            divideNumbers(num1, num2);
            break;
        default:
            alert("Result case statement broken");
    }

    mathFunctionPressed = false;
    num1 = display.textContent;
}

//Start Divide Button
function divide(){
    num1 = Number.parseFloat(display.textContent);
    mathFunctionPressed = true;
    selectedFunction = 'division'
}

//Start Multiplicaiton Button
function multiply(){
    num1 = Number.parseFloat(display.textContent);
    mathFunctionPressed = true;
    selectedFunction = 'multiplication'
}

//Start Subtraction Button
function subtract(){
    num1 = Number.parseFloat(display.textContent);
    mathFunctionPressed = true;
    selectedFunction = 'subtraction'
}

//Start Addition Button
function add(){
    num1 = Number.parseFloat(display.textContent);
    mathFunctionPressed = true;
    selectedFunction = 'addition'
}

//Math Functions
//Addition
function addNumbers(num1, num2) {
    display.textContent = num1 + num2;
}

//Subtraction
function subtractNumbers(num1, num2){
    display.textContent = num1 - num2;
}

//Multiplication
function multiplyNumbers(num1, num2){
    display.textContent = num1 * num2;
}

//Division
function divideNumbers(num1, num2){
    if(num2 == 0){
        alert("Nope");
        return;
    }
    display.textContent = num1 / num2;
}

//Negation
function negateNumber(){
    display.textContent = Number.parseFloat(display.textContent) * -1 
}