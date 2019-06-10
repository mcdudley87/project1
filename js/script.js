//Variables







//Functions










function randomImg1() {
	var myImages1 = new Array();
	myImages1[1] = "img/monster2.jpg";
	myImages1[2] = "img/monster3.jpg";
	myImages1[3] = "img/monster4.jpg";
	var rnd = Math.floor(Math.random() * myImages1.length);
	if (rnd == 0) {
					rnd = 1;
	}
	document.write('<img class="img" src="' + myImages1[rnd] + '">');
}