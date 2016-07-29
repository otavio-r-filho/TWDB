//---------------------------------------------------------
// App setup
//---------------------------------------------------------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/yelpcamp");

//---------------------------------------------------------
// Global objects
//---------------------------------------------------------

var Campground = mongoose.model('Campground', {
	name: String,
	img: String
});

//---------------------------------------------------------
// App routing
//---------------------------------------------------------

app.get("/", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/\"");
	res.render("index", {
		pageTittle: "Yelp Camp", 
		links: ["css/index.css"]
	});
});

app.get("/campgrounds", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/campgrounds\"");
	// res.render("campgrounds", {
	// 	pageTittle: "Yelp Camp - Camp Grounds",
	// 	links: ["css/campgrounds.css"],
	// 	campgrounds: campgrounds
	// });

	Campground.find(function(error, camps) {
		if(error) {
			console.log("Could't retrieve any campgrounds");
		} else {
				res.render("campgrounds", {
					pageTittle: "Yelp Camp - Camp Grounds",
					links: ["css/campgrounds.css"],
					campgrounds: camps
				});
		}
	});
});

app.post("/campgrounds", function(req, res){
	console.log("Serving POST request for " + req.ip + " on page \"/campgrounds\"");

	if(req.body.name.length > 0 && req.body.img.length > 0) { 
		var newCamp = new Campground({
			name: req.body.name,
			img: req.body.img
		});

		newCamp.save(function(error, newCampground) {
			if(error) {
				console.log("The new camp could not be saved.");
			} else {
				console.log("New campground saved as follow:");
				console.log(newCampground);
			}
		});
	}
	
	res.redirect("campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/campgrounds/new\"");
	res.render("new", {
		pageTittle: "Yelp Camp - Add New Camp",
		links: ["../css/new.css"]
	});
});

//---------------------------------------------------------
// App listener
//---------------------------------------------------------
app.listen("3000", "0.0.0.0", function() {
	console.log("Server has been started!");
});