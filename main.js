let num1 = 0;
let num2 = 0;
let target = "";
let opAdded = false;
let calculated = false;
let op;
let screen = document.querySelector(".screen");

const key = document.querySelectorAll(".numkey").forEach((keys) => {
    keys.addEventListener("click", () => {
        target += keys.textContent;
        screen.textContent = target;
        handleNumbers()
    }
)});

const operator = document.querySelectorAll(".operator").forEach((ops) => {
    ops.addEventListener("click", () => {
            if (!calculated) {operate()};
            op = ops.textContent;
            opAdded = true;
            target = "";
            calculated = false;
    }
)});

const clear = document.querySelectorAll(".clear").forEach((ops) => {
    ops.addEventListener("click", () => {
        num1 = 0;
        num2 = 0;
        target = "";
        screen.textContent = 0;
    }
)});

const equal = document.querySelector(".equal").addEventListener("click",() => operate())

function handleNumbers () {
    if (!opAdded) {
        num1 = target;
    } else {
        num2 = target;
    };
};

function operate () {
    switch (op) {
        case "+":
            num1 = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            num1 = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            num1 = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            num1 = parseInt(num1) / parseInt(num2);
            break;
    }
    screen.textContent = num1;
    calculated = true;
}