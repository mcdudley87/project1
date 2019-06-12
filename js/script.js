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
var pic;
var dice;
var img1 = "img/monster1";
var img2 = "img/monster1dead";




var dungeon = [ 
		{	health: 14,
			name: "Medium Monster",
			flavorTxt: "Likes walks on the beach and eating your face...",
			pic: "img/monster2.jpg",
		},
		{	health: 10, 
			name: "Easy Orc",
			flavorTxt: "Believed in himself, but then took an arrow to the knee.",
			pic: "img/monster3.jpg",
		},
		{ health: 17,
			name: "Hard Hellion",
			flavorTxt: "Large, hard, and in charge.",
			pic: "img/monster3.jpg",
		},
		{ health: 5,
			name: "Orc Dork",
			flavorTxt: "Orc the Dork slays with spork.",
			pic: "img/monster4.jpg",
		},
		{ health: 19,
			name: "Hard Hellion",
			flavorTxt: "Can you even stand them biceps?",
			pic: "img/monster5.jpg",
		},
		{ health: 12,
			name: "Hard Hellion",
			flavorTxt: "Swipes right to disembowel you.",
			pic: "img/monster1.jpg",
		},
		{ health: 8,
			name: "Hard Hellion",
			flavorTxt: "Devours more souls than your ex.",
			pic: "img/monster3.jpg",
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
	} else if (lives=== 0) {
		document.getElementById("rollButton").disabled = true;
		document.getElementById("text").textContent = ("Game Over. Push Reset to Play.");
		document.getElementById("monsterBio").textContent = ("You have been defeated, mortal...");
	} else if (score>=10) {
		document.getElementById("text").textContent = ("I DIDN'T EVEN WRITE LOGIC FOR THAT!");
		document.getElementById("monsterBio").textContent = ("HOLY BUTTS YOU BEAT THE GAME!");
		document.getElementById("total").textContent = ("HOLY BUTTS");
		document.getElementById("hp").textContent = ("HOLY BUTTS");
		document.getElementById("score").textContent = ("HOLY BUTTS");
		document.getElementById("lives").textContent = ("HOLY BUTTS");
	} else { 
		document.getElementById("text").textContent = ("You lose...this time!"); 
		document.getElementById("rollButton").disabled = true;
		lives--;
		livesEl.textContent = lives;
	} 
};	


//Gets monster, starts game
function start() {
	if (lives>0) {
	healthEl.textContent=dungeon[Math.floor(Math.random()*dungeon.length)].health;
	health=dungeon[Math.floor(Math.random()*dungeon.length)].health;
	document.getElementById("text").textContent = ("Good luck..."); 
	document.getElementById("total").textContent = ("0");
	document.getElementById("monsterBio").textContent = (dungeon[Math.floor(Math.random()*dungeon.length)].flavorTxt);
	document.getElementById("rollButton").disabled = false;
	demon.src = dungeon[Math.floor(Math.random()*dungeon.length)].pic;  //FLAG FOR CHANGE IMAGE FUNCTION
	} else if (lives===0 ) {
		document.getElementById("rollButton").disabled = true;
		document.getElementById("startButton").disabled = true;
	}
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



/*
===========================================

Hard Hat Area








*/