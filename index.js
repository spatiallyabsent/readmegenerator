// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const generateReadMe = ({pTitle, description, motivation, problem, learn, installation, usage, tests, assets, credits, license, contribute, GHubName, EMail}) =>
`# <${pTitle}>

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Description
- ${description}

- ${motivation}
- ${problem}
- ${learn}

## Installation
- ${installation}

## Usage
- ${usage}

## Tests
- ${tests}

## Credits
- Below is a list of 3rd party applications and users who contributed to this project.
- ${assets}
- ${credits}

## License
- ${license}

## How to contribute
- ${contribute}

## Questions
- For any questions reach out to [GitHub](https://github.com/${GHubName}) or email me at ${EMail}`;


inquirer.prompt([
  {
    type: 'input',
    name: 'pTitle',
    message: 'What is the Project Title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project.',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was the motivation behind this project?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does this project solve?',
  },
  {
    type: 'input',
    name: 'learn',
    message: 'Did you learn anything new while completing this project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the insturctions to install this project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Write out any instructions on how to use this application.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write down what kind of testing this program went through.',
  },
  {
    type: 'input',
    name: 'assets',
    message: 'Write out any third-party assets you have used in this project here.',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Add links to any github users or other contributors here.',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'add any licenses here if you used them.',
    choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'BSD 4-clause "Original" or "Old" license', 'BSD Zero-Clause license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution ShareAlike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC']
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can someone contribute to this project?',
  },
  {
    type: 'input',
    name: 'GHubName',
    message: 'What is your GitHub user name?',
  },
  {
    type: 'input',
    name: 'EMail',
    message: 'What is your email address?',
  },
])
.then((answers) => {
  const readMePage = generateReadMe(answers);

  fs.writeFile('README.md', readMePage, (err) =>
  err ? console.log(err) : console.log('Successfully created the ReadMeFile!')
  );
});


