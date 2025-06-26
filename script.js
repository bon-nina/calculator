let number1;
let number2;
let operator;
let displayContent;


const display = document.querySelector(".display");
const acBtn = document.querySelector("#ac-btn");
const delBtn = document.querySelector("#del-btn");
const Btn1 = document.querySelector("#one-btn");
const Btn2 = document.querySelector("#two-btn");
const Btn3 = document.querySelector("#three-btn");
const Btn4 = document.querySelector("#four-btn");
const Btn5 = document.querySelector("#five-btn");
const Btn6 = document.querySelector("#six-btn");
const Btn7 = document.querySelector("#seven-btn");
const Btn8 = document.querySelector("#eight-btn");
const Btn9 = document.querySelector("#nine-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const addBtn = document.querySelector("#addbtn");
const subtractBtn = document.querySelector("#subtract-btn");
const resultBtn = document.querySelector("#result-btn");



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

console.log(operate("+",21,7));