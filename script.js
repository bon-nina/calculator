let input = "";
let latestNum = null;
let storageNum = null;
let operator = null;


const display = document.querySelector(".display");

//making buttons functioning
const acBtn = document.querySelector("#ac-btn");
acBtn.addEventListener("click", () => clearAll());

const delBtn = document.querySelector("#del-btn");
delBtn.addEventListener("click", () => deleteOne());

const btn0 = document.querySelector("#zero-btn");
btn0.addEventListener("click", () => assignNumbers(0));

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
resultBtn.addEventListener("click", () => {
    if( !storageNum == false && !latestNum == false) {
    operate(operator, storageNum, latestNum);
    }
});

const decimalBtn = document.querySelector("#decimal-btn");
decimalBtn.addEventListener("click", () => {
    if (isDecimal() === false) {
        assignNumbers("."); 
    }
});


function operate (operator,num1, num2) {
    let result;
   if (operator === "+") {
        result = calculation.add(num1,num2);
        result = Math.round(result*10000)/10000;
   }
   else if (operator === "-") {
        result = calculation.subtract(num1,num2);
        result = Math.round(result*10000)/10000;
   }
   else if (operator === "*") {
        result = calculation.multiply(num1,num2);
        result = Math.round(result*10000)/10000;
   }
   else if (operator === "/") {
        if (num2 !== 0) {
            result = calculation.divide(num1,num2);
            result = Math.round(result*10000)/10000;
            }
        else {    
            result = "ERROR -  can't divide by 0" ;
            }
   }
   operator = null;
   display.textContent = result;
   latestNum = null;
   storageNum = result;
   input = "";
   console.log(operator,latestNum,storageNum, result);
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
                return (num1 / num2);
        },
}

function assignNumbers (num) {
    input += `${num}`;
    latestNum = Number(input);
    display.textContent = input;
    console.log(storageNum,latestNum);
}

function assignOperators (symbol)  {
    if (!operator == false && !storageNum == false && !latestNum == false){
         operate(operator,storageNum,latestNum);
    }
    else if (!operator && !storageNum == false) {}
    else if (!operator == false) {}
    else {
        storageNum = latestNum;
        latestNum = null;
    }
    operator = symbol;
    input = "";
    display.textContent = input;
}

function clearAll () {
    input = "";
    latestNum = null;
    storageNum = null;
    operator = null;
    display.textContent = input;
}

function deleteOne() {
    if (!latestNum == false) {
        let str = (`${latestNum}`);
        if (str.length >1) {
         str = str.split("")
                  .slice(0,-1)
                  .join("");
        display.textContent = str;
        latestNum = Number(str);
        input = `${latestNum}`;
        }
        else if (str.length == 1) {
            latestNum = null;
            input = "";
        display.textContent = "";
        }
     }
}

function isDecimal () {
    let str = (`${latestNum}`).split("");
    let alreadyDecimal = str.includes(".");
    return alreadyDecimal;
}   