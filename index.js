// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a breif description?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter the installation instructions',
    name: 'bio',
  },

  {
    type: 'input',
    message: 'Enter usage instructions?',
    name: 'usage',
  },

  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
  },

  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test',
  },

  {
    type: 'list',
    message: 'Which license did you use?',
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
    name: 'license',
  },

  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },

  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },

  
];

const inquirer = require('inquirer')
const fs = require('fs')
// const generatePortfolio = require('./portfolio')

// function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile('portfolio.html', generatePortfolio(answers), (err) => {
//     if (err) { console.log(err) }


//   })
// }





inquirer
  .prompt(
    questions
  )
  .then(answers => {

  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

