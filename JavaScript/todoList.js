var option;
var todos = new Array();
while(option != "quit") {
	option = prompt("What would you like to do?");
	switch(option) {
		case "new":
			todos.push(prompt("Enter a new todo"));
		break;
		case "list":
			console.log("***********");
			todos.forEach(function(todo, i){
				console.log(i + ": " + todo);
			})
			console.log("***********");
		break;
		case "quit":
		break;
		case "delete":
			var index = prompt("Enter index of todo to delete");
			todos.splice(index,1);
			alert("Item removed!");
		break;
		default:
			console.log("Not a valid option.");
		break;
	}
}
console.log("Ok! We're done!");