#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select one of the following operations to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"]
    }
]);
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operators === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operators === "Exponent") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("Please select a valid operator");
}
