// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
var fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("hello world")
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please describe your project?"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions of your project?"
      },
      {
        type: "input",
        name: "usage",
        message: "Please describe how your project is used?"
      },
      {
        type: "input",
        name: "license",
        message: "Which license(s) the application is covered under?"
      },
      {
        type: "input",
        name: "contributing",
        message: "Please list the contrinutors of the code used?"
      },
      {
        type: "input",
        name: "tests",
        message: "Please list the testing done on the project?"
      },
      {
        type: "input",
        name: "questions",
        message: "Please list any questions about the project here?"
      },
      {
        type: "input",
        name: "github",
        message: "What is the GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the e-mail address?"
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      // console.log(generateMarkdown(answers))
      var readMeData = generateMarkdown(answers)
      // console.log(readMeData)
      writeToFile("ReadMeTest.md", readMeData)
    })
}

// Function call to initialize app
init();
