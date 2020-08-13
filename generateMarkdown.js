// function to generate markdown for README
function generateMarkdown(answers) {
  // return the following.  This content will be in the form of a markdown file, have the proper syntax, and include all the respectful values of the users input.
  return `

# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Tests](#tests)
* [Quesions](#questions)


## Description:
> ${answers.description}

### Installation:
${answers.installation}

### Usage:
${answers.usage}

### Contributing:
${answers.contribution}

### Tests:
${answers.test}

### Questions:
Contact me for questions at:
**GitHub:**
[${answers.github}](https://github.com/${answers.github})
**Email:**
${answers.email}
`
}


// export
module.exports = generateMarkdown