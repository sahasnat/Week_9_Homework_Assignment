// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub Username?",
    "What is your email address?",
    "What is your projects's name?",
    "Please write a short description of your project:",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run test?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the rep?"
];

const [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9] = questions;

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: Q1,
    },
    {
        type: 'input',
        name: 'email',
        message: Q2,
    },
    {
        type: 'input',
        name: 'title',
        message: Q3,
    },
    {
        type: 'input',
        name: 'description',
        message: Q4,
    },
    {
        type: 'input',
        name: 'license',
        message: Q5,
    },
    {
        type: 'input',
        name: 'dependencies',
        message: Q6,
    },
    {
        type: 'input',
        name: 'test',
        message: Q7,
    },
    {
        type: 'input',
        name: 'repo',
        message: Q8,
    },
    {
        type: 'input',
        name: 'contribution',
        message: Q9,
    },
  ])
};



// TODO: Create a function to write README file
function writeToFile(data) {
    
    fs.writeFileSync('README.md', generateMarkdown(data)
    );
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((data) => writeToFile(data))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
