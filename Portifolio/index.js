//Environment settup
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var portifolio = require("./public/js/portifolio");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var headIncludes = portifolio.addCSS("/css/bootstrap.css") + 
						 portifolio.addCSS("/css/bootstrap-theme.css") + 
						 portifolio.addCSS("/css/bootstrap-submenu.css") + 
						 portifolio.addCSS("/css/index.css") + 
						 portifolio.addCSS("/css/font-awesome.css") +
						 portifolio.addScript("/js/lib/jquery-2.2.4.js") + 
						 portifolio.addScript("/js/lib/bootstrap.js") + 
						 portifolio.addScript("/js/lib/bootstrap-submenu.js");

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
		pageTittle: "Otavio VR Portifolio",
		headIncludes: headIncludes,
		bodyTopIncludes: "",
		bodyBottomIncludes: portifolio.addScript("/js/enableSubmenu.js")
	});
});

//End of app routing

app.listen("3000", "0.0.0.0", function() {
	console.log("Server has been started!");
});