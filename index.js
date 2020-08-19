const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
var fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "text",
    message: "Enter your project title: ",
    name: "title",
  },
  {
    type: "text",
    message: "Enter a description of your project: ",
    name: "description",
  },
  {
    type: "text",
    message: "Enter Installation: ",
    name: "installation",
  },
  {
    type: "text",
    message: "Enter Usage: ",
    name: "usage",
  },
  {
    type: "list",
    choices: ["MIT", "Apache", "Boost"],
    message: "Choose your License: ",
    name: "license",
  },
  {
    type: "text",
    message: "Contributing: ",
    name: "contributing",
  },
  {
    type: "text",
    message: "Test Instructions: ",
    name: "tests",
  },
  {
    type: "text",
    message: "Github Username: ",
    name: "username",
  },
  {
    type: "text",
    message: "Enter your contact email address: ",
    name: "emailAddress",
  },
];

// array of license for user
const license = [
  {
    name: "MIT",
    link:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  },
  {
    name: "Apache",
    link:
      "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  },
  {
    name: "Boost",
    link:
      "![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    var userLislink = license.filter((lice) => lice.name === response.license);
    response.license = userLislink[0].link;
    console.log(response);
    var editReadme = generateMarkdown(response);
    // writeToFile("README.md", editReadme);
    writeToFile("newREADME.md", editReadme);
  });
}

// function call to initialize program
init();
