function isEven(x) {
	var numX = Number(x);
	if(numX % 2 === 0) {
		return true;
	}
	return false;
}

function factorial(x) {
	var numX = Number(x);
	var fact = 1;
	for(var i = 2; i <= numX; i++) {
		fact *= i;
	}
	return fact;
}

function kebabToSnake(kebab) {
	var newKebab = kebab.split("-").join("_");
	return newKebab;
}

var attr = prompt("Tell me a number or write me a kebab!");
var option = prompt("Tell what to calculate(isEven, factorial, kebabToSnake");

switch(option) {
	case "isEven":
		alert("Is " + attr + " even? -> " + isEven(attr));
	break;
	case "factorial":
		alert("Factorial of " + attr + " is " + factorial(attr));
	break;
	case "kebabToSnake":
		alert(kebabToSnake(attr));
	break;
	default:
		alert("Not a valid function");
	break;
}
