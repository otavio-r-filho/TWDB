var age = prompt("What is your age?");

if(age < 0) {
	console.log("Ain't nobody got time for your BS");
}
else if(age < 18) {
	console.log("You cannot enter the venue");
} else if(age < 21 ) {
	console.log("You can enter but cannot drink");
} else if(age === 21) {
	console.log("Happy 21st birthday");
}

if(!(age % 2 === 0)) {
	console.log("Your age is odd");
}

if(Math.sqrt(age) === Math.round(Math.sqrt(age))) {
	console.log("Perfect square");
}