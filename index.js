const inquirer = require('inquirer');

// employee classes
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');

// Inquirer prompt for employee information
promptUser = () => {
    return inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role', 
                choices: ['Intern', 'Engineer', 'Manager',] : ifManager ? ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: `Please enter employee's name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Employee's name is required! Please enter name.`)
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
                        console.log(`Employee's ID number is required!`)
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
                        console.log(`Employee's email number is required!`);
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role', 
                choices: ifManager ? ['Engineer', 'Intern'] : ['Manager', 'Engineer', 'Intern']
            },
        ])
}