const display = document.querySelector(".io-display");
const buttons = document.querySelector(".buttons");
const acButton = document.querySelector(".ac");

function updateDisplay(number){
    display.innerText = display.innerText === "0" ? number : display.innerText + number
}

buttons.addEventListener("click", e => {
    if(e.target.classList.contains("number")){
        updateDisplay(e.target.innerText);
    }
    if(e.target.classList.contains("ac")){ 
        display.innerText = "0";
    }
    if(e.target.classList.contains("clear")){
        display.innerText = display.innerText.length === 1 ? "0" : display.innerText.slice(0, display.innerText.length - 1);
    }
});