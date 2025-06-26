let number1;
let number2;
let operator;
let displayContent;


const display = document.querySelector(".display");

//making buttons functioning
const acBtn = document.querySelector("#ac-btn");
acBtn.addEventListener("click", () => clearAll());

const delBtn = document.querySelector("#del-btn");
delBtn.addEventListener("click", () => deleteOne());

const btn1 = document.querySelector("#one-btn");
btn1.addEventListener("click", () => assignVariables(1));

const btn2 = document.querySelector("#two-btn");
btn2.addEventListener("click", () => assignVariables(2));

const btn3 = document.querySelector("#three-btn");
btn3.addEventListener("click", () => assignVariables(3));

const btn4 = document.querySelector("#four-btn");
btn4.addEventListener("click", () => assignVariables(4));

const btn5 = document.querySelector("#five-btn");
btn5.addEventListener("click", () => assignVariables(5));

const btn6 = document.querySelector("#six-btn");
btn6.addEventListener("click", () => assignVariables(6));

const btn7 = document.querySelector("#seven-btn");
btn7.addEventListener("click", () => assignVariables(7));

const btn8 = document.querySelector("#eight-btn");
btn8.addEventListener("click", () => assignVariables(8));

const btn9 = document.querySelector("#nine-btn");
btn9.addEventListener("click", () => assignVariables(9));

const multiplyBtn = document.querySelector("#multiply-btn");
multiplyBtn.addEventListener("click", () => assignVariables("*"));

const divideBtn = document.querySelector("#divide-btn");
divideBtn.addEventListener("click", () => assignVariables("/"));

const addBtn = document.querySelector("#addbtn");
addBtn.addEventListener("click", () => assignVariables("+"));

const subtractBtn = document.querySelector("#subtract-btn");
subtractBtn.addEventListener("click", () => assignVariables("-"));

const resultBtn = document.querySelector("#result-btn");
resultBtn.addEventListener("click", () => operate(operator,number1,number2));



function operate (operator,num1, num2) {
   if (operator == "+") {
        return calculation.add(num1,num2);
   }
   else if (operator == "-") {
        return calculation.subtract(num1,num2);
   }
   else if (operator == "*") {
        return calculation.multiply(num1,num2);
   }
   else if (operator == "/") {
        return calculation.divide(num1,num2);
   }
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

function assignVariables () {


}

function clearAll () {


}

function deleteOne() {

}