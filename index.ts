import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";

function randomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

let userScore = 0;
let computerScore = 0;
async function guessNumber() {
  let answer = await inquirer.prompt({
    name: "unumber",
    type: "number",
    message: "Guess the number between 1 and 2",
  });
  // console.log(answer.unumber);
  let computerNumber = randomNumber();
  if (computerNumber === answer.unumber) {
    console.log(`User Guess is right and You win`);
    userScore += 10;
    console.log(`
    Computer Score =${computerScore}
    Your Score=${userScore}
    `);
  } else {
    console.log(`User Guess is wrong and You Lose`);
    computerScore += 10;
    console.log(`
    Computer Score =${computerScore}
    Your Score=${userScore}
    `);
  }
  let again = await inquirer.prompt({
    name: "question",
    type: "input",
    message: "Do you want to play again? y/n",
  });
  if (again.question === "y") {
    guessNumber();
  } else {
    if (computerScore > userScore) {
      console.log("Computer wins");
      var msg = "computer wins";
    } else if (computerNumber < userScore) {
      // console.log("User wins");
      var msg = "User wins";
    } else {
      // console.log("Match is tie");
      var msg = "Match is tie";
    }
    //
    function winner() {
      console.clear();
      // const msg = `
      // text style`;

      figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
      });
    }
    winner();
    //
  }
}
guessNumber();
