// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const path = reqiure('path');


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//! WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
  }
])
.then((answers) => {
    const pageContent = makeNewFile(answers)
  
    fs.writeFile('YourNewReadme.md', pageContent, (err) =>
    err ? console.log(err) : console.log('IT WORKED!'))
  });


const makeNewFile = (answers) => {
    return `
    #${answers.title}

    ## Table Of Contents
    - Description
    - License
    - Installation
    - Test
    - Usage
    - Contributing
    - Credits
    - Questions
    
    ## Description 
    
    ${answers.description}

    ## License
    ${answers.license}

    ## Installation
    ${answers.installation}

    ## Test
    ${answers.test}

    ## Usage
    ${answers.usage}

    ## Contributing
    ${answers.contributing}

    ## Credits
    ${answers.github}
    ${answers.email}
    ${answers.linkedin}

    # Questions
    For any questions reach out to me at ${answers.email} or at my GitHub ${answers.github}
    `
}


// TODO: Create a function to write README file



// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
