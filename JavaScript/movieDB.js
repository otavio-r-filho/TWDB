var movies = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
];

for (var i = 0; i < movies.length; i++) {
	var msg = "You have ";
	if(!movies[i].hasWatched) {
		msg = msg + "not ";
	}
	msg = msg + "watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars";
	console.log(msg);
}