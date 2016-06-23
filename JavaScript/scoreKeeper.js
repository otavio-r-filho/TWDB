var p1Pts = document.getElementById("p1-pts");
var p2Pts = document.getElementById("p2-pts");
var maxPts = Number(document.getElementById("maximumPts").textContent);

var p1Btn = document.getElementById("player-one-btn");
var p2Btn = document.getElementById("player-two-btn");
var rstBtn = document.getElementById("reset");

//p1Btn.addEventListener("click", addPts(p1Pts, p2Pts));

//p2Btn.addEventListener("click", addPts(p2Pts, p1Pts));

// rstBtn.addEventListener("click", functio() {
// 	if()
// })

function addPts(primary, secondary) {
	var primaryPts = Number(primary.textContent);
	var secondaryPts = Number(secondary.textContent);
	if(primaryPts < maxPts && secondaryPts < maxPts) {
		primary.textContent = ++primaryPts;
		if(primaryPts == maxPts) {
			primaryPts.classList.add("maximumReached");	
		}
	}
}