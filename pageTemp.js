

const generateManager = manager => {
    return `
        <div class="managerCard">
        <div class="card-header">
            <h2>${manager.getRole()}</h2>
            <h3>${manager.getName()}</h3>
        </div>
            <ul>
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    `;
};


const generateEngineer = engineer => {
    return `
        <div class="engineerCard">
        <div class="card-header">
            <h2>${engineer.getRole()}</h2>
            <h3>${engineer.getName()}</h3>
        </div>
            <ul>
                <li>ID: ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    `;
};


const generateIntern = intern => {
    return `
        <div class="internCard">
        <div class="card-header">
            <h2>${intern.getRole()}</h2>
            <h3>${intern.getName()}</h3>
        </div>
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    `;
};





module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <main class="container pageCard">
        <header class="row">
            <h1>Team List</h1>
        </header>
        <div class="row">
            
                <div class="team-area col-12 d-flex justify-content-center>
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </main>
</body>
</html>
    `;
};