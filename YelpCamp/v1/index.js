//---------------------------------------------------------
// App setup
//---------------------------------------------------------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//---------------------------------------------------------
// App routing
//---------------------------------------------------------

app.get("/", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/\"");
	res.render("index", {
		pageTittle: "Yelp Camp", 
		links: [
			{
				rel: "stylesheet",
				type: "text/css",
				href: "css/index.css"
			}
		]
	});
});

app.get("/campgrounds", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/campgrounds\"");
	res.render("campgrounds", {
		pageTittle: "Yelp Camp - Camp Grounds",
		links: ""
	});
});

app.post("/campgrounds", function(req, res){

});

app.get("/campgrounds/new", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/campgrounds/new\"");
});

//---------------------------------------------------------
// App listener
//---------------------------------------------------------
app.listen("3000", "0.0.0.0", function() {
	console.log("Server has been started!");
});