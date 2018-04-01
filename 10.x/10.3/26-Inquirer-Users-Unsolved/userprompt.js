// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inq = require("inquirer");

inq.prompt([
    {
        type: "input",
        message: "What is your name?", 
        name: "username"
        //validate: (item) => parseInt(item) ? true: false
    },
    {
        type: "password", 
        message: "What is your password?", 
        name: "password"
    }, 
    {
        type: "list",
        message: "Let's play rock, paper, scissors...",
        name: "rpsUserChoice",
        choices: ["rock", "paper", "scissors"]
    }, 
    {
        type:"checkbox", 
        message:"Choose your modifier...",
        name:"modifier", 
        choices:["attack", "defense", "speed"]
    }, 
    {
        type:"confirm", 
        message:"Are you Sure?", 
        name:"confirm"
    }

]).then(answers => { console.log(answers) });
