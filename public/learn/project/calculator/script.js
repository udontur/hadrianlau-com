let equation = {
    first: "",
    operator: null,
    second: "",
    state: 1
}

function toNumber(inString) {
    return +inString;
}

function calculate(first, operator, second) {
    first = toNumber(first);
    second = toNumber(second);
    if (operator === "+") return first + second;
    else if (operator === "-") return first - second;
    else if (operator === "×") return first * second;
    else return first / second;
}

function displayContent(inString) {
    let screen = document.querySelector(".screen");
    screen.textContent = inString;
}

for (let key = 0; key <= 9; key++) {
    let btnClass = ".btn" + String(key);
    let btn = document.querySelector(btnClass);
    btn.addEventListener("click", () => {
        if (equation.state === 1 || equation.state === 3) {
            if (equation.state === 3) {
                equation.first = "";
                equation.state = 1;
            }
            equation.first += String(key);
            displayContent(equation.first);

        } else if (equation.state === 2) {
            equation.second += String(key);
            displayContent(equation.first + equation.operator + equation.second);
        }
    });
}

let listOfOperator = [["+", "addition"], ["-", "subtraction"], ["×", "multiplication"], ["÷", "division"]];
for (let key of listOfOperator) {
    let operator = key[0];
    let operatorName = key[1];
    let btnClass = "." + operatorName;
    console.log(btnClass);
    let btn = document.querySelector(btnClass);
    btn.addEventListener("click", () => {
        if (equation.state === 1 && equation.first === "" && operator === "-") {
            equation.first = "-";
            displayContent(equation.first);
        } else if ((equation.state === 1&&equation.first!=""&&equation.first!="-") || equation.state === 3 || (equation.state === 2 && equation.second === "")) {
            equation.operator = operator;
            equation.state = 2;
            displayContent(equation.first + equation.operator);
        }
    });
}

let btnEqua = document.querySelector(".equa");
let btnCanc = document.querySelector(".canc");
function isFloat(number) {
    if (Math.floor(number) != number) return true;
    else return false;
}
btnEqua.addEventListener("click", () => {
    if (equation.state === 2) {
        let equationAnswer = calculate(equation.first, equation.operator, equation.second);
        if (isFloat(equationAnswer))
            equationAnswer = Number(equationAnswer.toFixed(8));
        displayContent(String(equationAnswer));
        equation.first = equationAnswer;
        equation.operator = null;
        equation.second = "";
        equation.state = 3;
    }
});

btnCanc.addEventListener("click", () => {
    displayContent("");
    equation.first = "";
    equation.operator = null;
    equation.second = "";
    equation.state = 1;
});
