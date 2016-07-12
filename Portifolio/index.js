//Environment settup
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var portifolio = require("./public/js/portifolio");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//End of environmen settup

//App routing
app.get("/", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/\"");
	console.log("Redirecting " + req.ip + " to page \"/index\"");
	res.redirect("index");
});

app.get("/index", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/index\"");
	res.render("index", {
		pageTittle: "This is a silly test",
		headIncludes: portifolio.addCSS("/css/bootstrap.css") + portifolio.addCSS("/css/index.css") + portifolio.addScript("/js/lib/jquery-2.2.4.js") + portifolio.addScript("/js/bootstrap.js"),
		bodyTopIncludes: "",
		pageExplanation: "This is working! I can't believe!",
		bodyBottomIncludes: ""
	});
});

//End of app routing

app.listen("3000", "0.0.0.0", function() {
	console.log("Server has been started!");
});