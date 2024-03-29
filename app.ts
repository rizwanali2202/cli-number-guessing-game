#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\twell to rizwanali2202 - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "Enter your guess number (number limit from 1 to 5)",
    },
]);

if(answer.userGuessnumber === randomNumber){
console.log("You guess a correct number");
}
else {
    console.log("Sorry you guess a wrong number");
}