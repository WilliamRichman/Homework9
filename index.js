const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const api = require("./api");

const questions = [
{   name: "color",
    color: "What is your favorit color?",
    choices: ["blue", "green", "pink", "red"],
    type: "list"
},
{
    name: "git",
    github: "What is your GitHub username?",
    type: "input"
},
]

function start(){
inquirer.prompt(questions).then(({color,git}) =>{
    console.log("got it")
    api.findUser(git).then(response => {
        console.log(response.data)
    })
    return;
})
};
start();