let inquirer  = require("inquirer");

class Player {
    constructor(name, position, offense, defense){
        this.name = name;
        this.position = position;
        this.offense = offense;
        this.defense = defense;
    }


    goodGame() {
        let coin = (Math.floor(Math.random() * 2) == 0);
        if(coin){
            this.offense++;
        }else{
            this.defense++;
        }
    }

    badGame(){
        let coin = (Math.floor(Math.random() * 2) == 0);
        if(coin){
            this.offense--;
        }else{
            this.defense--;
        }
    }

    printStats(){
        console.log(`
        Name:      ${this.name}
        Position:  ${this.position}
        Offense:   ${this.offense}
        Defense:   ${this.defense}
        `)

    }
}

// Player.prototype.printInfo = function() {
//     console.log("Name: " + this.name + "\nPosition: " + this.position +
//     "\nOffense: " + this.offense + "\nDefense: " + this.defense);
//     console.log("---------------");
//   };

var team     = [],
    subs     = [];
    starters = [];


var teamBuilder = function(count) {
  // if statement to ensure that our questions are only asked five times
  if (count > 0) {
    console.log("NEW PLAYER");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is your player name?"
      }, {
        name: "position",
        message: "What position do you wanna play?"
      }, {
        name: "offense",
        message: "What is the player's offensive score (1 - 10)?",
        validate: (arg) => (isNaN(arg)===false && parseInt(arg)>0 && parseInt(arg)<11) ? true : false
      }, {
        name: "defense",
        message: "What is the player's defensive score (1 - 10)?",
        validate: (arg) => (isNaN(arg)===false && parseInt(arg)>0 && parseInt(arg)<11) ? true : false
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newGuy = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);
        
        if (count <= 2) {
            team.push(newGuy);
            starters.push(newGuy);

        } else {
            subs.push(newGuy)
            team.push(newGuy);
            
        }
      // add one to count to increment our recursive loop by one
    //   count--;
      // run the askquestion function again so as to either end the loop or ask the questions again
      teamBuilder(--count);
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < team.length; x++) {
        team[x].printStats();
    }
console.log(` team! ${JSON.stringify(team)}`);
    
  }
};

// call func to run our code
teamBuilder(3);



// function offensiveStat () {

//     for (let i = 0; i < team.length; i++) {
//         let offensiveSum = 0;
//         team.offense
        

//     }

// }

// function defensiveStat () {

//     for (let i = 0; i < team.length; i++) {
//         let defensiveSum = 0;

        

//     }

// }




// function playGame (count) {
//     if ( count > 0) {
//         let randomOffense = Math.floor(Math.random()*21);
//         let randomDefense = Math.floor(Math.random()*21);

//         if (  ) {

//         }
        
        

//     }


//     playGame(--count)

// }
// playGame(5)
