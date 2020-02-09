const axios = require("axios");
require("dotenv");

const api = { 
    findUser(userName) {
        return axios.get('https://api.github.com/users/'+ userName +'?client_id=172aff1074ba44d7e995&client_secret=39671eb595bdac737243214cc648b0fc22055c65')
        .catch(err => {
            console.log("User Not Found")
            process.exit(1)
        })
    }
    getStars(userName){
        return axios.get('https://api.github.com/users/'+ userName +'?client_id=172aff1074ba44d7e995&client_secret=39671eb595bdac737243214cc648b0fc22055c65')
        .then(response => {
            console.log(responose.data)
        })
        .catch(err => {
            console.log("User Not Found")
            process.exit(1)
        })
    }
}

module.exports = api
