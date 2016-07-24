var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
//----------------------------------------------------

app.get("/", function(req, res) {
	res.render("index");
	request('http://www.google.com', function (error, response, body) {
		if (!error && response.statusCode == 200) {
		// console.log(body) // Show the HTML for the Google homepage.
			console.log("Response status: " + response.statusCode);
		}
	});
});

//----------------------------------------------------
app.listen("3000", "0.0.0.0", function() {
	console.log("Server has started");
});