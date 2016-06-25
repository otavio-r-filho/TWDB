var easyMode = false;
var colors = generateColors();
var pickedColor = pickRandomColor();

var squares = document.querySelectorAll(".square");
var pickedColorText = document.querySelector(".right-color");
var gameMessage = document.querySelector("#game-message");

pickedColorText.textContent = pickedColor;

for (var i = 0; i < colors.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		var squareColor = this.style.background;
		if(squareColor === pickedColor) {
			gameMessage.textContent = "Winner!";
			for (var j = 0; j < colors.length; j++) {
				squares[j].style.background = squareColor;
			}
		} else {
			gameMessage.textContent = "Try Again!";
			this.style.background = "#232323";
		}
	});
}

function generateRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateColors() {
	var colorQtd = 6;

	var colors = [];
	
	if (easyMode) {
		colorQtd = 3;
	}

	for (var i = 0; i < colorQtd; i++) {
		colors.push(generateRandomColor());
	}

	return colors;
}

function pickRandomColor() {
	var color = Math.floor(Math.random() * colors.length);
	return colors[color];
}