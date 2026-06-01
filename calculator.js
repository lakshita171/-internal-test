// Name = Lakshita
// Subject Name = Gaining Proficency in Web technologies
// Roll no. = 25MEITJWD011

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let operator = prompt("Enter operation (+, -, *, /):");

if (num1 === "" || num2 === "") {
    console.log("Error: Numbers cannot be empty");
}

else if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers");
}

else {

    num1 = Number(num1);
    num2 = Number(num2);

    let result;

    switch (operator) {

        case "+":
            result = num1 + num2;
            console.log("Addition =", result);
            break;

        case "-":
            result = num1 - num2;
            console.log("Subtraction =", result);
            break;

        case "*":
            result = num1 * num2;
            console.log("Multiplication =", result);
            break;

        case "/":

        
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed");
            } else {
                result = num1 / num2;
                console.log("Division =", result);
            }

            break;

        default:
            console.log("Error: Invalid operator");
    }
}