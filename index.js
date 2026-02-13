const display = document.querySelector(".io-display");
const buttons = document.querySelector(".buttons");
const acButton = document.querySelector(".ac");

let num1 = null;
let num2 = null;
let operation = null;

let toClean = false;

function updateDisplay(number){
    display.innerText = display.innerText === "0" ? number : display.innerText + number
}

function evaluate(num1, num2, operation){
    let res = 0;
    switch (operation) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num1 / num2;
            break;
    }
    return res;
}

function clearDisplay(){
    display.innerText = "0";
}

buttons.addEventListener("click", e => {
    if(e.target.classList.contains("number")){
        if(toClean) {clearDisplay(); toClean = false};
        if(display.innerText.includes(".") && e.target.innerText === ".") return;
        updateDisplay(e.target.innerText);
    }
    if(e.target.classList.contains("ac")){ 
        num1 = null;
        num2 = null;
        operation = null;
        clearDisplay();
    }
    if(e.target.classList.contains("clear")){
        display.innerText = display.innerText.length === 1 ? "0" : display.innerText.slice(0, display.innerText.length - 1);
    }
    if(e.target.classList.contains("operation")){
        if(!num1){
            if(e.target.innerText !== "="){
                num1 = Number(display.innerText);
                operation = e.target.innerText;
                toClean = true;
            }
        }
        else{
            num2 = Number(display.innerText);
            display.innerText = evaluate(num1, num2, operation)
            num1 = null;
            num2 = null;
            operation =null;
            if(e.target.innerText !== "="){
                num1 = Number(display.innerText);
                operation = e.target.innerText;
            }
            toClean = true;
        }
    }
});