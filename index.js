const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const api = require("./api");
const createHtml = require("./createHtml");
const path = require('path')
const convertFactory = require("electron-html-to")
const open = require("open")

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

function createPDF(filename, data){
    return fs.writeFileSync(path.join(process.cwd(),filename),data)
}

function start(){
    inquirer.prompt(questions).then(({color,git}) =>{
        console.log("got it")
        api.findUser(git).then(response => {
            console.log(response.data)
            api.getStars(git).then(stars =>{
                return createHtml({
                    stars, 
                    color,
                    ...response.data
                });
            })
        }).then(html => {
            const convert = convertFactory({
                converterPath: convertFactory.converters.PDF
            });
            convert({html},(err, result) =>{
                if (err){
                    return console.log(err);
                }
                result.stream.pipe(
                    fs.createWriteStream(path.join(__dirname, "resume.pdf"))
                )
                convert.kill()
            })
            open(path.join(process.cwd(),"resume.pfd"))
        })
            
    })
};
start();