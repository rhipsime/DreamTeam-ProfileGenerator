const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer"); // Required only once
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Function to prompt user for team manager information
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team manager\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the team manager\'s employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the team manager\'s email address:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the team manager\'s office number:'
        }
    ]);
}

// Function to prompt user for options to add engineers, interns, or finish building the team
function promptTeamOptions() {
    return inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'What would you like to do next?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    });
}

// Function to start gathering information about team members
async function gatherTeamInformation() {
    const team = [];

    // Gather information about the team manager
    const managerInfo = await promptManager();
    const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
    team.push(manager);

    // Continue gathering information about other team members based on user's choice
    let userChoice;
    do {
        userChoice = await promptTeamOptions();
        switch (userChoice.option) {
            case 'Add an engineer':
                // Prompt user for engineer information
                // Create an instance of Engineer class
                // Add engineer to the team array
                break;
            case 'Add an intern':
                // Prompt user for intern information
                // Create an instance of Intern class
                // Add intern to the team array
                break;
            case 'Finish building the team':
                // Finish gathering team information
                break;
        }
    } while (userChoice.option !== 'Finish building the team');

    return team;
}

// Call the gatherTeamInformation function to start gathering team information
gatherTeamInformation()
    .then(team => {
        // Once all information is gathered, you can proceed with further actions (e.g., generating HTML)
    })
    .catch(err => console.error(err));
