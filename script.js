let input = "";
let latestNum = null;
let storageNum = null;
let operator = null;
let displayContent = "";


const display = document.querySelector(".display");

//making buttons functioning
const acBtn = document.querySelector("#ac-btn");
acBtn.addEventListener("click", () => clearAll());

const delBtn = document.querySelector("#del-btn");
delBtn.addEventListener("click", () => deleteOne());

const btn1 = document.querySelector("#one-btn");
btn1.addEventListener("click", () => assignNumbers(1));

const btn2 = document.querySelector("#two-btn");
btn2.addEventListener("click", () => assignNumbers(2));

const btn3 = document.querySelector("#three-btn");
btn3.addEventListener("click", () => assignNumbers(3));

const btn4 = document.querySelector("#four-btn");
btn4.addEventListener("click", () => assignNumbers(4));

const btn5 = document.querySelector("#five-btn");
btn5.addEventListener("click", () => assignNumbers(5));

const btn6 = document.querySelector("#six-btn");
btn6.addEventListener("click", () => assignNumbers(6));

const btn7 = document.querySelector("#seven-btn");
btn7.addEventListener("click", () => assignNumbers(7));

const btn8 = document.querySelector("#eight-btn");
btn8.addEventListener("click", () => assignNumbers(8));

const btn9 = document.querySelector("#nine-btn");
btn9.addEventListener("click", () => assignNumbers(9));

const multiplyBtn = document.querySelector("#multiply-btn");
multiplyBtn.addEventListener("click", () => assignOperators("*"));

const divideBtn = document.querySelector("#divide-btn");
divideBtn.addEventListener("click", () => assignOperators("/"));

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", () => assignOperators("+"));

const subtractBtn = document.querySelector("#subtract-btn");
subtractBtn.addEventListener("click", () => assignOperators("-"));

const resultBtn = document.querySelector("#result-btn");
resultBtn.addEventListener("click", () => operate(operator, storageNum, latestNum));



function operate (operator,num1, num2) {
    let result;
   if (operator === "+") {
        result = calculation.add(num1,num2);
   }
   else if (operator === "-") {
        result = calculation.subtract(num1,num2);
   }
   else if (operator === "*") {
        result = calculation.multiply(num1,num2);
   }
   else if (operator === "/") {
        result = calculation.divide(num1,num2);
   }
   else { result = latestNum; }

   operator = null;
   display.textContent = result;
   latestNum = result;
   storageNum = null
   input = "";
   console.log(latestNum);
   console.log(storageNum);
   console.log(input);
   console.log(operator);
}

const calculation = {
        add: function(num1,num2) {
            return (num1 + num2);
        },

        subtract: function(num1,num2) {
           return  (num1 - num2);
        },

        multiply: function(num1,num2) {
            return (num1 * num2);
        },

        divide: function(num1,num2) {
            if (num2 != 0) {
                return (num1 / num2);
            }
            else {
                return "ERROR - can't divide by 0";
            }
        },
}

function assignNumbers (num) {
    input += `${num}`;
    latestNum = parseInt(input);
    displayContent = input;
    display.textContent = displayContent;
}

function assignOperators (symbol)  {
    if (storageNum !== null) {
        operate(operator,storageNum,latestNum);
    }
    operator = symbol;
    storageNum = latestNum;
    latestNum = 0;
    input = "";
    displayContent = input;
}

function clearAll () {
    input = "";
    latestNum = null;
    storageNum = null;
    operator = null;
    displayContent = "";
    display.textContent = displayContent;
}

function deleteOne() {

}