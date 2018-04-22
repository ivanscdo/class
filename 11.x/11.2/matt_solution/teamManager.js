var inquirer = require('inquirer');

class Player {
	constructor( name, position, offense, defense, goodGame, badGame ) {
		this.name = name;
		this.position = position;
		this.offense = parseInt(offense);
		this.defense = parseInt(defense);
	}
	goodGame() {
		let random = Math.floor(Math.random());
		if ( random > 0.5 )
			this.offense += 1;
		else
			this.defense += 1;
	}

	badGame() {
		let random = Math.floor(Math.random());
		if ( random > 0.5 )
			this.offense -= 1;
		else
			this.defense -= 1;
	}

	printStats() {
		console.log(
			`
			Name: ${this.name}
			Position: ${this.position}
			Offensive Ability: ${this.offense}
			Defensive Ability: ${this.defense}
			`
		);
	}
}

let teamPlayers = [];
let activePlayers = [];
let inactivePlayers = [];

let questions = [
	{
		name: 'name',	
		type: 'input',
		message: "What is the player's name?"
	},
	{
		name: 'position',
		type: 'input',
		message: "What is the player's position?"
	},
	{
		name: 'offense',
		type: 'list',
		message: "What is the player's skill on offense (1 = poor, 10 = superb)",
		choices: ['1','2','3','4','5','6','7','8','9','10']
	},
	{
		name: 'defense',
		type: 'list',
		message: "What is the player's skill on defense (1 = poor, 10 = superb)",
		choices: ['1','2','3','4','5','6','7','8','9','10']
	}
];

// Play 
function playGame(round){
	let score = 0;
	let num1 = Math.floor(Math.random() * 20 - 1);
	let num2 = Math.floor(Math.random() * 20 - 1);

	let teamOff = 0;
	let teamDef = 0;

	activePlayers.forEach(player => {
		teamOff += player.offense;
		teamDef	+= player.defense;
	});

	console.log(`
		Team Offense: ${teamOff}
		Team Defense: ${teamDef}

		Opponent Offense: ${num1}
		Opponent Defense: ${num2}
		`)

	if ( teamOff > num1 )
		score += 1;
	if ( num2 > teamDef )
		score -= 1;

	console.log(score);
	round--;
	if ( round > 0 ){
		changePlayers(round);
	} else {
		postGame(score);
	}
}

function postGame(score) {
	console.log(score);
	if ( score > 0 ){
		console.log('YOU WON!')
		activePlayers.forEach( player => player.goodGame() );
		printTeamStats();
	}
	else if ( score < 0 ){
		console.log('YOU LOST!')
		activePlayers.forEach( player => player.badGame() );
	} else {
		console.log('TIE GAME!')
	}

	inquirer
		.prompt([
			{
				name: "again",
				type: "confirm",
				message: "Would you like to play again?"		
			}
		])
		.then( response => {
			if ( response.again )
				playGame(5)
			else
				console.log("Good game. Til next time...")
		})
}

// Make your team
function inputPlayers(num) {
	if (num > 0) {
		inquirer
			.prompt( questions )
			.then( response => {
				let player = new Player( response.name, response.position, response.offense, response.defense )
				console.log('============')
				if ( num > 1 )
					activePlayers.push(player);
				else
					inactivePlayers.push(player);
				teamPlayers.push(player);
				num -= 1;
				inputPlayers(num)
		})
	} else {
		printTeamStats();
		playGame(5);
	}
}
inputPlayers(3);

function printTeamStatsAlt() {
	console.log(`
		Active Players:
	`)
	for (var i = 0; i < activePlayers.length; i++) {
		activePlayers[i].printStats();
	}
	console.log(`
		Benched:
	`)
	for (var i = 0; i < inactivePlayers.length; i++) {
		inactivePlayers[i].printStats();
	}
}
function printTeamStats() {
	console.log(`
		Roster:
	`)
	for (var i = 0; i < teamPlayers.length; i++) {
		teamPlayers[i].printStats();
	}
}

function changePlayers(round) {
	let confirmQuestions = [
		{
			name: 'confirm',
			type: 'confirm',
			message: 'Would you like to make a substitution?'
		}
	];
	let subQuestions = [
		{
			name: 'playerOut',
			type: 'list',
			message: "Which player do you want to take out?",
			choices: activePlayers
		},
		{
			name: 'playerIn',
			type: 'list',
			message: "Which player do you want to put in?",
			choices: inactivePlayers
		}
	];
	inquirer.prompt(confirmQuestions).then( response => {
			if(response.confirm)
				inquirer
					.prompt( subQuestions )
					.then( response => {
						activePlayers.forEach( (player, i) => {
							if ( player.name === response.playerOut )
								activePlayers.splice(i, 1);
						});
						inactivePlayers.forEach( (player, i) => {
							if (player.name === response.playerIn )
								inactivePlayers.splice(i, 1);
						})
						for (var i = 0; i < teamPlayers.length; i++) {
							if ( teamPlayers[i].name === response.playerIn ){
								activePlayers.push(teamPlayers[i]);
							}
							if ( teamPlayers[i].name === response.playerOut){
								inactivePlayers.push(teamPlayers[i]);
							}
						}
						printTeamStatsAlt();
						playGame(round);
					})
			else
				playGame(round);
		})
}