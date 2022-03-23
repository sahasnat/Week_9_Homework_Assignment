// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#### ${data.title}
  ---
  license${data.license}

  ##### Description
  ${data.description}

  ##### Table of Contents
  - [Installation link](http://Installation.com/)
  - Usage
  - Licnese
  - Contributing
  - Tests
  - [Questions link](http://Questions.com/)

  ##### Installation
  To install necessary depenencies, run the following command:
  ${data.dependencies}

  #### Usage
  ${data.repo}

  #### Licesnse
  ${data.license}

  #### Contributing
  ${data.contribution}

  #### Tests
  To run tests, run the following command:
  ${data.test}

  #### Questions
  It you have any question aobut the repo, open an issue or contact me directly at ${data.email}.
  You can find more of my work at ${data.github}

`;
}

module.exports = generateMarkdown;
