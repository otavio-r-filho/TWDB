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

// app.get("/", function(req, res) {
// 	console.log("Serving GET request for " + req.ip + " on page \"/\"");
// 	res.render("index", {
// 		pageTittle: "Yelp Camp", 
// 		preScripts: [],
// 		links: ["css/index.css"]
// 	});
// });

app.get("/", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/\"");

	Campground.find(function(error, camps) {
		if(error) {
			console.log("Could't retrieve any campgrounds");
		} else {
				res.render("index", {
					pageTittle: "Yelp Camp - Camp Grounds",
					preScripts: ["js/index.js"],
					links: ["css/index.css"],
					campgrounds: camps
				});
		}
	});
});

app.post("/", function(req, res){
	console.log("Serving POST request for " + req.ip + " on page \"/\"");

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
	
	res.redirect("/");
});

app.delete("/", function(req, res) {
	console.log("Serving DELETE request for " + req.ip + " on page \"/\"");

	console.log(req.body.ids[0]);

	for(var i = 0; i < req.body.ids.length; i++) {
		Campground.findByIdAndRemove(req.body.ids[i], function(err, id) {
			if(err) {
				console.log("Something went wrong:" + err);
			} else {
				console.log("Item with id=" + id + " successfuly deleted.");
			}
		});
	}

	res.render("index", {
					pageTittle: "Yelp Camp - Camp Grounds",
					preScripts: ["js/index.js"],
					links: ["css/index.css"],
					campgrounds: camps
				});	

});

app.get("/new", function(req, res) {
	console.log("Serving GET request for " + req.ip + " on page \"/new\"");
	res.render("new", {
		pageTittle: "Yelp Camp - Add New Camp",
		preScripts: [],
		links: ["../css/new.css"]
	});
});

//---------------------------------------------------------
// App listener
//---------------------------------------------------------
app.listen("3000", "0.0.0.0", function() {
	console.log("Server has been started!");
});