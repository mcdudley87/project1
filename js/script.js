//Variables
var rollButton;
var startButton;
var resetButton;
var demon; 
var lives = 3;
var totals = 0;
var health = 0;
var healthEl;
var score = 0;
var scoreEl;
var flavorTxtEl;
var livesEl;
var name;
var nameEl;
var dice;
var img1 = "img/monster1";
var img2 = "img/monster1dead";


var dungeon = [ 
		{	health: 14,
			name: "Medium Monster",
			flavorTxt: "Larry likes walks on the beach and eating your face...",
		},
		{	health: 10, 
			name: "Easy Orc",
			flavorTxt: "Used to believe in himself, but then took an arrow to the knee.",
		},
		{ health: 17,
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
		document.getElementById("text").textContent = ("You win! Push start to summon demon.");
		demon.src = 'img/monster1dead.jpg';
		document.getElementById("rollButton").disabled = true;
		lives++;
		livesEl.textContent = lives;
		score++;
		scoreEl.textContent = score;
	} else if (lives===0) {
		document.getElementById("rollButton").disabled = true;
		document.getElementById("text").textContent = ("Game Over");
		document.getElementById("monsterBio").textContent = ("You have been defeated, mortal...");
	} else { 
		document.getElementById("text").textContent = ("You lose...this time!"); 
		document.getElementById("rollButton").disabled = true;
		lives--;
		livesEl.textContent =lives;
	} 
};	


//Gets monster, starts game
function start() {
	//var demon= myArray[Math.floor(Math.random() * dungeon.length)];
	healthEl.textContent=dungeon[0].health;
	health=dungeon[0].health;
	document.getElementById("text").textContent = ("Good luck..."); 
	document.getElementById("total").textContent = ("0");
	document.getElementById("monsterBio").textContent = (dungeon[0].flavorTxt);
	document.getElementById("rollButton").disabled = false;
	demon.src = 'img/monster1.jpg';
};


//Resets game state
function reset() {
	document.getElementById("total").textContent = ("0");
	document.getElementById("hp").textContent = ("0");
	document.getElementById("score").textContent = ("0");
	document.getElementById("lives").textContent = ("3");
	document.getElementById("text").textContent = ("Welcome mortal! Push 'Start' to Begin!");
	document.getElementById("monsterBio").textContent = ("Who shall we slay today?");
	document.getElementById("rollButton").disabled = false;
	demon.src = 'img/monster1.jpg';
};

/* get random monster function:

var summon = dungeon[Math.floor(Math.random()*dungeon.length)];



*/


document.addEventListener("DOMContentLoaded", function() {
	rollButton = document.getElementById("rollButton")
	rollButton.addEventListener("click", roll)
	demon=document.getElementById("demon",)
	healthEl=document.getElementById("hp",)
	startButton = document.getElementById("startButton")
	startButton.addEventListener("click", start)
	resetButton=document.getElementById("resetButton")
	resetButton.addEventListener("click", reset)
	livesEl=document.getElementById("lives")
	scoreEl=document.getElementById("score")
	} 
);

//lives restored
	//re-activate roll button




/*
===========================================

Hard Hat Area








*/