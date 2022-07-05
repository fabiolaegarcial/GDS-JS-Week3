//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
console.log('Very Hard: Use the function calc() to prompt calculator');

function calc(){
    var operand1 = parseInt(prompt('Enter first operand: '));
    var operator = prompt('Enter operator: ');
    var operand2 = parseInt(prompt('Enter first operand: '));
    switch (operator){
        case "+":
            console.log(operand1 + ' ' + operator + ' ' + operand2 + ' = ' + add(operand1, operand2));
            break;
        case "-":
            console.log(operand1 + ' ' + operator + ' ' + operand2 + ' = ' + subtract(operand1, operand2));
            break;
        case "*":
            console.log(operand1 + ' ' + operator + ' ' + operand2 + ' = ' + multiply(operand1, operand2));
            break;
        case "/":
            console.log(operand1 + ' ' + operator + ' ' + operand2 + ' = ' + divide(operand1, operand2));
            break;
        default:
            console.log("Not a valid expression.");
    }
}

function add(operand1, operand2){
    return operand1 + operand2;
}

function subtract(operand1, operand2){
    return operand1 - operand2;
}

function multiply(operand1, operand2){
    return operand1 * operand2;
}

function divide(operand1, operand2){
    return operand1 / operand2;
}