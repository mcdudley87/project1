//Variables
var rollButton;
var startButton;
var resetButton;
var demon; 
var dice;
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
			flavorTxt: "Believed in himself util he took an arrow in the knee.",
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
	diceRoll.src = "img/roll.gif";
	var rnd = Math.floor(Math.random() * 20);
	document.getElementById('total').textContent = rnd;
	totals = rnd;
	console.log("rnd:", rnd);
	console.log("health:", health);
	console.log("lives:", lives);
	console.log("score:", score);
	if (rnd >= health) {
		console.log("rnd is greater than health...");
		document.getElementById("text").textContent = ("You win! Push SUMMON to play.");
		demon.src = 'img/monster1dead.jpg';
		document.getElementById("rollButton").disabled = true;
		lives++;
		livesEl.textContent = lives;
		score++;
		scoreEl.textContent = score;
	} else if (lives===0) {
		console.log("lives === 0...");
		document.getElementById("rollButton").disabled = true;
		document.getElementById("text").textContent = ("Game Over. Push Reset to Play.");
		document.getElementById("monsterBio").textContent = ("You have been defeated, mortal...");
		demon.src = "img/gameover.png";
	} else if (score===10) {
		console.log("score is >= 10");
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
console.log(lives);




//Button that rolls RND + 3 for 2 lives?



//Check for win function needs to go here. 



// function checkWin() {
// 	if (lives===0) {
// 		document.getElementById("text").textContent = ("Game Over. Push Reset to Play.");
// 		document.getElementById("monsterBio").textContent = ("You have been defeated, mortal...");
// 		demon.src = "img/gameover.png";
// 	} else if (score===10) {
// 		document.getElementById("text").textContent = ("I DIDN'T EVEN WRITE LOGIC FOR THAT!");
// 		document.getElementById("monsterBio").textContent = ("HOLY BUTTS YOU BEAT THE GAME!");
// 		document.getElementById("total").textContent = ("HOLY BUTTS");
// 		document.getElementById("hp").textContent = ("HOLY BUTTS");
// 		document.getElementById("score").textContent = ("HOLY BUTTS");
// 		document.getElementById("lives").textContent = ("HOLY BUTTS");
// 	}
// };
	


//Gets monster, starts game
function start() {
	if (lives>0) {
		var rand = Math.floor(Math.random()*dungeon.length);
		healthEl.textContent=dungeon[rand].health;
		health=dungeon[rand].health;
		document.getElementById("text").textContent = ("Good luck..."); 
		document.getElementById("total").textContent = ("0");
		document.getElementById("monsterBio").textContent = (dungeon[rand].flavorTxt);
		document.getElementById("rollButton").disabled = false;
		demon.src = dungeon[rand].pic;  
		diceRoll.src = "img/D200.jpg";
	} else if (lives===0 ) {
		document.getElementById("rollButton").disabled = true;
		document.getElementById("startButton").disabled = true;
		document.getElementById("text").textContent = ("Game Over. Push Reset to Play.");
		document.getElementById("monsterBio").textContent = ("You have been defeated, mortal...");
		demon.src = "img/gameover.png";
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
	document.getElementById("startButton").disabled = false;
	diceRoll.src = "img/D200.jpg";
	lives = 3;
};


document.addEventListener("DOMContentLoaded", function() {
	rollButton=document.getElementById("rollButton")
	rollButton.addEventListener("click", roll)
	demon=document.getElementById("demon",)
	diceRoll=document.getElementById("diceRoll")	
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