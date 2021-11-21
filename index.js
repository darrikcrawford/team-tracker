const inquirer = require('inquirer');

// employee class import
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const {writeFile, copyFile} = require('./utils/generate-site');
const { SIGTERM } = require('constants');

let ifManager = false; 

// Inquirer prompt for employee information
const promptInput = () => {
    return inquirer.prompt ([
            {
                type: 'list',
                name: 'role', 
                choices: ifManager ? ['Engineer', 'Intern'] : ['Intern', 'Engineer', 'Manager',]
            },
            {
                type: 'input',
                name: 'name',
                message: `Please enter employee's name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Must enter employee's name!`)
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: `Please enter employee's ID number?`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log(`Must enter employee's ID number!`)
                        return false
                    }
                }
            },
            {
                type: 'input', 
                name: 'email',
                message: `Please enter employee's email?`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log(`Must enter employee's email!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: `Please enter the name of the intern's school?`,
                when:  ({ role }) => {
                    if(role === 'Intern') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: schoolInput => {
                    if(schoolInput) {
                        return true; 
                    } else {
                        console.log(`Must enter the intern's school`)
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: `Please enter the engineer's github information?`,
                when: ({ role }) => {
                    if(role === 'Engineer') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log(`Must enter the engineer's github.`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `Please enter the manager's office number?`,
                when: ({ role }) => {
                    if(role === 'Manager') {
                        ifManager = true;
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: numberInput => {
                    if(numberInput) {
                        return true;
                    } else {
                        console.log(`Must enter manager's office number!`);
                    }
                }
            },
        ])
}

promptInput();