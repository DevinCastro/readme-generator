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
    name: 'installation',
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

// first we need to import the following npm to use for prompting the user in the terminal
const inquirer = require('inquirer')
// Import the filsystem framework so we can use the writeFile function
const fs = require('fs')
// Import the module export from the generateMarkdown.js file
const generateMarkdown = require('./generateMarkdown.js')


// function to write README file
// pass in two parameters, first the name of the file we want to write and then the content of what we want to write
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) { console.log(err) }

  })
}


// Use the inquirer.prompt function to promp the user with the questions
inquirer
  .prompt(
    questions
  )
  // the input of the users will be store in the 'answers' object and then we do the following
  .then(answers => {
    // call the writeToFile function and create a markdown file called newReadMe.md, and pass the content of the generateMarkdown function with the answers parameter.
    writeToFile('newReadMe.md', generateMarkdown(answers))
    console.log('File Created!')
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  })