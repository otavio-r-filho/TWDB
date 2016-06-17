var done = false;
var num = 7;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === num) {
	alert("You guessed it!");
	done = true;
} else if(guess < num) {
	alert("Too low. Try again!");
} else {
	alert("Too high. Try again");
}