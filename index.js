const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


const teamList = [];
/* const userIds = []; */
//Write your app here


function finalize(){

};

function addIntern(){

};

function addEngineer() {}

;

function teamBuilder() {
    inquirer
        .prompt([
            {type: "list",
            name: "selectEmployee",
            message: "Choose a team member to add: ",
            choicese: [ "Engineer", "Intern", "Finished"],
            },    
        ])
        .then((selection) => {
            if (selection === "Engineer"){
                addEngineer();
            } else if (selection === "Intern"){
                addIntern();
            } else {
                finalize();
            };
        });
};

function enterManager(){
    inquirer
        .prompt([
            {type: "input",
            name: "managerName",
            message: "Please enter the Managers name: ",
            },
            {type: "input",
            name: "managerId",
            message: "Please enter the Managers ID: ",
            },
            {type: "input",
            name: "managerEmail",
            message: "Please enter the Managers Email: ",
            },
            {type: "input",
            name: "managerOffNum",
            message: "Please enter the Managers office number: ",
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
            /* userIds.push(response.managerId); */

            teamBuilder();
        });

};


enterManager();