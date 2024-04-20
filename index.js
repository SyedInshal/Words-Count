#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Please Enter Your Sentence Or Paragraph:"
});
const word = answer.Sentence.trim().split(" ");
console.log(`Your Sentence Word Count Is ${word.length}`);
