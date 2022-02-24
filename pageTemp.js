const generateTeam = team => {

const generateManager = manager => {
    return `
        <div class="card">
            <div class="manager-header">
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
        <div class="card">
            <div class="engineer-header">
                <h2>${engineer.getRole()}</h2>
                <h3>${engineer.getName()}</h3>
            </div>
            <ul>
                <li>ID: ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    `;
};


const generateIntern = intern => {
    return `
        <div class="card">
            <div class="intern-header">
                <h2>${intern.getRole()}</h2>
                <h3>${intern.getName()}</h3>
            </div>
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    `;
};

const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

    }

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main class="container pageCard">
        <header class="row">
            <h1>Team List</h1>
        </header>
        <div class="row">
            <div class="col-lg-4></div>
            <div class="col-lg-4>
                <div class="container">
                 ${generateTeam(team)}
                </div>
            </div>
            <div class="col-lg-4></div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
    `;
};