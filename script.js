let number1;
let number2;
let operator;

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