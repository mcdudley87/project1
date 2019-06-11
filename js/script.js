//Variables
var rollButton;
var startButton;
var resetButton;
var demon; 
var lives = ["5"];
var totals = 0;
var health = 0;
var healthEl;
var flavorTxtEl;
var name;
var nameEl;
var dice;
var img1 = "img/monster1";
var img2 = "img/monster1dead";
var dungeon = [ 
		{	health: 10,
				name: "Medium Monster",
				flavorTxt: "Likes long walks on the beach and eating your face...",
		},
		{	health: 5, 
				name: "Easy Orc",
				flavorTxt: "Used to believe in himself, but then took an arrow to the knee.",
		},
		{
		health: 16,
			name: "Hard Hellion",
			flavorTxt: "Large, hard, and in charge."
		},
];


//Functions


			//Rolls Dice
function roll() {
	var rnd = Math.floor(Math.random() * 20);
	document.getElementById('total').textContent = rnd;
	totals = rnd;
	if (rnd >= health) {
		document.getElementById("text").textContent = ("You win!");
		demon.src = 'img/monster1dead.jpg';
		
		//lives down/up? 
	} else { 
		document.getElementById("text").textContent = ("You lose...this time!"); 
		//lives up? if no lives, disable
		//display game over?
	} 
};	

//Gets monster, starts game
function start() {
	healthEl.textContent=dungeon[0].health;
	health=dungeon[0].health;
	// flavorTxtEl.textContent=dungeon[0].flavorTxt;
	// text=dungeon[0].flavorTxt;
	document.getElementById("text").textContent = ("Good luck..."); 
	document.getElementById("monsterBio").textContent = (dungeon[0].flavorTxt);
	//store health/hp in global
	//reset image to live monster
	
};

function reset() {
	document.getElementById("total").textContent = ("0");
	document.getElementById("hp").textContent = ("0");
	document.getElementById("text").textContent = ("Welcome mortal! Push 'Start' to Begin!");
	document.getElementById("monsterBio").textContent = ("Who shall we slay today?");
	demon.src = 'img/monster1.jpg';
};


//Resets game state

	//lives restored
	//re-activate roll button


// function checkForLoss() {
// 	//if turns = loss, else keep
// };


document.addEventListener("DOMContentLoaded", function() {
	rollButton = document.getElementById("rollButton")
	rollButton.addEventListener("click", roll)
	demon=document.getElementById("demon",)
	healthEl=document.getElementById("hp",)
	// flavorTxtEl=document.getElementById("text",)
	startButton = document.getElementById("startButton")
	startButton.addEventListener("click", start)
	resetButton=document.getElementById("resetButton")
	resetButton.addEventListener("click", reset)
	

} );




/*
===========================================

Hard Hat Area








*/