import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import render from './src/page-template.js';
import Manager from './lib/Manager';
import Engineer from './lib/Engineer';
import Intern from './lib/Intern';

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Function to prompt user for team manager information
async function promptManager() {
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

// Function to prompt user for engineer-specific information
async function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer\'s employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer\'s email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer\'s GitHub username:'
        }
    ]);
}

// Function to prompt user for intern-specific information
async function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern\'s employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern\'s email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the name of the intern\'s school:'
        }
    ]);
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
                const engineerInfo = await promptEngineer();
                const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
                team.push(engineer);
                break;
            case 'Add an intern':
                // Prompt user for intern information
                const internInfo = await promptIntern();
                const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                team.push(intern);
                break;
            case 'Finish building the team':
                // Finish gathering team information
                console.log("Building team completed.");
                // Generate HTML
                const html = render(team);
                // Write HTML to file
                fs.writeFileSync(outputPath, html);
                console.log(`Team HTML file generated at ${outputPath}`);
                return; // Exit the function and the application
        }
    } while (userChoice.option !== 'Finish building the team');
}

// Call the gatherTeamInformation function to start gathering team information
gatherTeamInformation()
    .catch(err => console.error(err));
