

var redElement = document.querySelector('.red');
var greenElement = document.querySelector('.green');
var blueElement = document.querySelector('.blue');



var redTab = document.querySelector('.red-tab');
var blueTab = document.querySelector('.blue-tab');
var greenTab = document.querySelector('.green-tab');


redTab.addEventListener('mouseover', showRed);
blueTab.addEventListener('mouseover', showBlue);
greenTab.addEventListener('mouseover', showGreen);

window.onload = function() {
	greenElement.style.display = 'none';
	blueElement.style.display = 'none';
};


function showRed(){
	greenElement.style.display = 'none';
	blueElement.style.display = 'none';
	redElement.style.display = 'block';
};

function showBlue(){
	greenElement.style.display = 'none';
	redElement.style.display = 'none';
	blueElement.style.display = 'block';
};

function showGreen(){
	redElement.style.display = 'none';
	blueElement.style.display = 'none';
	greenElement.style.display = 'block';
};



