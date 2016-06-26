var easyMode = false;
var colors = generateColors();
var pickedColor = pickRandomColor();

var squares = document.querySelectorAll(".square");
var pickedColorText = document.querySelector(".right-color");
var gameMessage = document.querySelector("#game-message");
var pageHead = document.querySelector(".page-head");

var newColorBtn = document.querySelector("#new-color");
var easyModeBtn = document.querySelector("#easy-mode");
var hardModeBtn = document.querySelector("#hard-mode");

pickedColorText.textContent = pickedColor;

for (var i = 0; i < colors.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		var squareColor = this.style.background;
		if(squareColor === pickedColor) {
			gameMessage.textContent = "Correct!";
			paintSquares(pickedColor);
			pageHead.style.background = pickedColor;
			newColorBtn.textContent = "Play again?"
		} else {
			gameMessage.textContent = "Try Again!";
			this.style.background = "#232323";
		}
	});
}

newColorBtn.addEventListener("click", function() {
	resetGame();
});

easyModeBtn.addEventListener("click", function() {
	easyMode = true;
	if(this.classList[0] != "selected") {
		resetGame();
	}
	hardModeBtn.classList.remove("selected");
	this.classList.add("selected");
});

hardModeBtn.addEventListener("click", function() {
	easyMode = false;
	if(this.classList[0] != "selected") {
		resetGame();
	}
	this.classList.add("selected");
	easyModeBtn.classList.remove("selected");
});

function resetGame() {
	colors = generateColors();
	pickedColor = pickRandomColor();
	paintSquares();
	pageHead.style.background = "steelblue";
	newColorBtn.textContent = "new color";
	gameMessage.textContent = "";
	pickedColorText.textContent = pickedColor;
}

function paintSquares(color) {
	for (var i = 0; i < colors.length; i++) {
		if (color != undefined) {
			squares[i].style.background = color;
		} else {
			squares[i].style.background = colors[i];
		}
		squares[i].style.display = "block";
		if (easyMode) {
			squares[i + 3].style.display = "none";
		}
	}
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