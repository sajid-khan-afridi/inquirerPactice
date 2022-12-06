import inquirer from "inquirer";
//inquirer examples
let questions = [
    {
        type: "input",
        name: "input_type",
        message: "What is your name?",
        default: "Iron Man",
    },
    {
        type: "list",
        name: "name1",
        message: "What is your favorite programming language?",
        choices: ["Java", "Python", "JavaScript"],
        default: "JavaScript",
    },
    {
        type: "checkbox",
        name: "checkbox_type",
        message: "What is your favorite programming language?",
        choices: ["Java", "Python", "JavaScript"],
        default: "JavaScript",
    },
];
let answer = await inquirer.prompt(questions);
// console.log(answer);
