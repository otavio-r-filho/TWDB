var game = {}

game.init = function() {
	game.setupVariables();
	game.setupModeBtns();
	game.setupNewColorBtn();
	game.resetGame();
	game.setupSquares();
}

game.setupSquares = function() {
	for (var i = 0; i < game.colors.length; i++) {
		game.squares[i].style.background = game.colors[i];

		game.squares[i].addEventListener("click", function() {
			var squareColor = this.style.background;
			if(squareColor === game.pickedColor) {
				game.gameMessage.textContent = "Correct!";
				game.paintSquares(game.pickedColor);
				game.pageHead.style.background = game.pickedColor;
				game.newColorBtn.textContent = "Play again?"
			} else {
				game.gameMessage.textContent = "Try Again!";
				this.style.background = "#232323";
			}
		});
	}
}

game.setupModeBtns = function() {
	for (var i = 0; i < game.modeBtn.length; i++) {
		game.modeBtn[i].addEventListener("click", function() {
			this.textContent === "easy"? game.easyMode = true: game.easyMode = false;

			if (this.classList[0] != "selected") {
				game.resetGame();
			}
			game.modeBtn[0].classList.remove("selected");
			game.modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
		});
	}
}

game.setupNewColorBtn = function() {
	game.newColorBtn.addEventListener("click", function() {
		game.resetGame();
	});
}

game.setupVariables = function() {
	game.squares = document.querySelectorAll(".square");
	game.pickedColorText = document.querySelector(".right-color");
	game.gameMessage = document.querySelector("#game-message");
	game.pageHead = document.querySelector(".page-head");
	game.newColorBtn = document.querySelector("#new-color");
	game.modeBtn = document.querySelectorAll(".mode");
}

game.resetGame = function() {
	game.colors = game.generateColors();
	game.pickedColor = game.pickRandomColor();
	game.paintSquares();
	game.pageHead.style.background = "steelblue";
	game.newColorBtn.textContent = "new color";
	game.gameMessage.textContent = "";
	game.pickedColorText.textContent = game.pickedColor;
}

game.paintSquares = function(color) {
	for (var i = 0; i < game.colors.length; i++) {
		if (color != undefined) {
			game.squares[i].style.background = color;
		} else {
			game.squares[i].style.background = game.colors[i];
		}
		game.squares[i].style.display = "block";
		if (game.easyMode) {
			game.squares[i + 3].style.display = "none";
		}
	}
}

game.generateRandomColor = function() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

game.generateColors = function() {
	var colorQtd = 6;

	var colors = [];
	
	if (game.easyMode) {
		colorQtd = 3;
	}

	for (var i = 0; i < colorQtd; i++) {
		colors.push(game.generateRandomColor());
	}

	return colors;
}

game.pickRandomColor = function() {
	var color = Math.floor(Math.random() * game.colors.length);
	return game.colors[color];
}

game.init();