///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
//                            Requires and Global variable declarations                                   //
//                                                                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////



const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const teamList = [];

const createHTML = require('./pageTemp.js');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
//                                 Employee information entry section                                      //
//                                                                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function to collect Manager Info
function enterManager(){
    inquirer
        .prompt([
            {type: "input",
            name: "managerName",
            message: "Please enter the Manager's name: ",
            },
            {type: "input",
            name: "managerId",
            message: "Please enter the Manager's ID: ",
            },
            {type: "input",
            name: "managerEmail",
            message: "Please enter the Manager's Email: ",
            },
            {type: "input",
            name: "managerOffNum",
            message: "Please enter the Manager's office number: ",
            },
        ])
        .then((response) => {
            const manager = new Manager(
                response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOffNum
                );

            teamList.push(manager);

            teamBuilder();
        });

};

// Function to collect Engineer info
function addEngineer() {
    inquirer
    .prompt([
        {type: "input",
        name: "engineerName",
        message: "Please enter the Engineer's name: ",
        },
        {type: "input",
        name: "engineerId",
        message: "Please enter the Engineer's ID: ",
        },
        {type: "input",
        name: "engineerEmail",
        message: "Please enter the Engineer's Email: ",
        },
        {type: "input",
        name: "engineerGitHub",
        message: "Please enter the Enginner's GitHub username: ",
        },
    ])
    .then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGitHub,
        );
        teamList.push(engineer);
        teamBuilder();
      });
};

// Function to collect Intern info
function addIntern(){
    inquirer
    .prompt([
        {type: "input",
        name: "internName",
        message: "Please enter the Intern's name: ",
        },
        {type: "input",
        name: "internId",
        message: "Please enter the Intern's ID: ",
        },
        {type: "input",
        name: "internEmail",
        message: "Please enter the Intern's Email: ",
        },
        {type: "input",
        name: "internSchool",
        message: "Please enter the name of the Intern's School: ",
        },
    ])
    .then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.internSchool
        );
        teamList.push(intern);
        teamBuilder();
      });
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
//                                      Utility Function Section                                           //
//                                                                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function startApp(){
    enterManager();
};


function teamBuilder() {
    inquirer
        .prompt([
            {type: "list",
            name: "selectEmployee",
            message: "Choose a team member to add: ",
            choices: ['Engineer','Intern',"Finished",], 
            },    
        ])
        .then((userChoice) => {
            if (userChoice.selectEmployee === "Engineer") {
                console.log(userChoice.selectEmployee);
                addEngineer();
            } else if (userChoice.selectEmployee === "Intern") {
                console.log(userChoice.selectEmployee);
                addIntern();
            } else {
                console.log(userChoice.selectEmployee);
                finalize();
            };
        });
};


function finalize(){
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
      }
      fs.writeFileSync(distPath, createHTML(teamList), 'utf-8');
    };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
//                                           Start Application                                             //
//                                                                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

startApp();