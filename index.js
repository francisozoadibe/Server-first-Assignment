
// in creating APIs, one need to setup  the following
//Development Environment
//servers
// then APIs that return either object,str, var etc 

        // setup Development environment
        // download vscode IDE and install, and it is use for writing of codes
        // download nodejs and install, a global varial used in running our projects
        // download postman and install, it use for the testing of APIs
        // create a empty folder on your desktop
        // use cd to move tot the directory you created or
        // drag the project folder into VScode
        // create your projects with the appriopriate extensions
            // index.js
        // Run node init to initialize your project
        // start to install your dependencies and devdependencies

const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()


const port = process.env.PORT || 6580 // READ FROM THE .ENV FILE IF THE PORT NUMBER IS NOT FOUND THEN USE 6580

app.listen((PORT) => {
    console.log(`server is running on port ${port}`)
});

// using "/string" in the browser will return the string in this very APIs
app.get("/string", (request, response) => {
    response.send("Hmm! Mpa Nnukwu is here")
})

// using "/object" in the browser will return the object in this very APIs
app.get("/object", (request, response)=>{
    response.json({message: "Hell World"})
})

// using "/array" in the browser will return the string in this very APIs
app.get("/array", (request, response) => {
    response.json(["apple", "banana", "orange"])
})


