//Variables
var rollButton;
var startButton;
var resetButton;
var demon; 
var lives = ["5"];
var totals = 0;
var health = 0;
var healthEl;
var name;
var nameEl;
var dice;
var img1 = "img/monster1";
var img2 = "img/deadmonster";
var dungeon = [ 
		{	health: 10,
				name: "Medium",
		},
		{	health: 5, 
				name: "Easy",
		},
		{
		health: 16,
			name: "Hard",
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
		//lives down?
	} else { 
		document.getElementById("text").textContent = ("You lose...this time!"); 
		//lives up?
	} 
};	

//Gets monster
function start() {
	healthEl.textContent=dungeon[0].health;
	health=dungeon[0].health;
	document.getElementById("text").textContent = ("Good luck..."); 
	//store health/hp in global
	//reset image to live monster
	
};

// function checkForLoss() {
// 	//if turns = loss, else keep
// };


document.addEventListener("DOMContentLoaded", function() {
	rollButton = document.getElementById("rollButton")
	rollButton.addEventListener("click", roll)
	demon=document.getElementById("demon",)
	healthEl=document.getElementById("hp",)
	startButton = document.getElementById("startButton")
	startButton.addEventListener("click", start)
	

} );




/*
===========================================

Hard Hat Area



var hp = monster life

if totals > hp then WIN









this works for sure:


function roll() {
	var rnd = Math.floor(Math.random() * 20);
	document.getElementById('total').textContent = rnd;
	totals = rnd;
};






buttons:

rollButton 
//roll the dice

button3
//Start game

button4
//reset game





*/