// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {`![licenseBadge](https://img.shields.io/badge/${license}-blue.svg)`;
} else {
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Table Of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Test](#test)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Questions](#questions)
  
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

  ## Questions
  For any questions reach out to me at ${answers.email} or at my GitHub ${answers.github}`;
}

module.exports = generateMarkdown;
 
