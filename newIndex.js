// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

init()
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: "What is the name of your project?",
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please write a short description of your project',
        },
        {
          type: 'list',
          name: 'license',
          message: 'What kind of license should your project have?',
          choices: ['MIT', 'APACHE 11', 'GPLv3', 'None'],
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What command needs to be used to install dependencies?',
          default: 'npm i',
        },
        {
          type: 'input',
          name: 'test',
          message: 'What command is used for running a test?',
          default: 'npm test',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Tell us what the user needs to know about using this repo?',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'What does the user need to know about making contributions?',
        },
        {
          type: 'input',
          name: 'github',
          message: "What is your GitHub username?",
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
        },
        {
          type: 'input',
          name: 'linkedin',
          message: 'Paste your LinkedIn profile url here'
        },
      ]
      // Add your questions here
      ).then((inquireResponses) => {
        const mdPageContent = generateMarkdown(inquireResponses);
        fs.writeFile('YourNewReadme.md', mdPageContent, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("It Worked, check your new file");
            }
            });
        });
    }

// Call the init function to start the application
