var p1Score = document.getElementById("p1-pts");
var p2Score = document.getElementById("p2-pts");
var winningScore = document.getElementById("maximumPts");

var gameOver = false;
var winningScoreNum = Number(winningScore.textContent);

var p1Btn = document.getElementById("player-one-btn");
var p2Btn = document.getElementById("player-two-btn");
var rstBtn = document.getElementById("reset");
var ptsSet = document.getElementById("pts-set-up");

function addPts(score) {
	var scoreNum = Number(score.textContent);

	if (!gameOver) {
        score.textContent = ++scoreNum;
        if (scoreNum === winningScoreNum) {
            score.classList.add("winner");
            gameOver = true;
        } else {
            score.classList.remove("winner");
        }
    }
}

p1Btn.addEventListener("click", function () {
	addPts(p1Score);
});

p2Btn.addEventListener("click", function () {
	addPts(p2Score);
});

rstBtn.addEventListener("click", function () {
	p1Score.classList.remove("winner");
	p1Score.textContent = "0";

	p2Score.classList.remove("winner");
	p2Score.textContent = "0";

	gameOver = false;

	ptsSet.value = "";

	winningScoreNum = 5;
	winningScore.textContent = "5";
});

ptsSet.addEventListener("change", function () {
	var p1ScoreNum = Number(p1Score.textContent);
	var maxPlayerPts = p1ScoreNum;
	var p2ScoreNum = Number(p2Score.textContent);
	var newWinningScore = Number(ptsSet.value);

	//Setting the minimum pts
	if (maxPlayerPts < p2ScoreNum) {
		maxPlayerPts = p2ScoreNum;
	}

	if (newWinningScore > maxPlayerPts) {
		winningScore.textContent = newWinningScore;
		winningScoreNum = newWinningScore;
		p2Score.classList.remove("winner");
		p1Score.classList.remove("winner");
		gameOver = false;
	} else {
		winningScore.textContent = maxPlayerPts;
		winningScoreNum = maxPlayerPts;
		ptsSet.value = maxPlayerPts;

		if (p1ScoreNum === maxPlayerPts) {
			p1Score.classList.add("winner");
			gameOver = true;
		}

		if (p2ScoreNum === maxPlayerPts) {
			p2Score.classList.add("winner");
			gameOver = true;
		}
	}
});