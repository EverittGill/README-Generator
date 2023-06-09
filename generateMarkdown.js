// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') { return `![licenseBadge](https://img.shields.io/badge/${license}-blue.svg)`;
} else {
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license !== 'None') {
  return `[License](#license)`
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## license \n We're using the ${license} license`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Table Of Contents
  - [Description](#description)
  - ${renderLicenseLink()}
  - [Installation](#installation)
  - [Test](#test)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Questions](#questions)
  
  ## Description 
  
  ${answers.description}

  \n
  
  ${renderLicenseSection(answers.license)}

  ## Installation
  ${answers.installation}

  ## Test
  ${answers.test}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Credits
  ${answers.github}\n
  ${answers.email}\n
  ${answers.linkedin}

  ## Questions
  For any questions reach out to me at ${answers.email} or at my GitHub ${answers.github}`;
}

module.exports = generateMarkdown;
 
