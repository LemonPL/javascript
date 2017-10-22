var movies = [
	{
		title: "Butterfly effect",
		rating: 10,
		hasWatched: "yes" 
	},
	{
		title: "Mad max",
		rating: 8,
		hasWatched: "yes" 
	},
	{
		title: "The Gladiator",
		rating: 9,
		hasWatched: "yes" 
	},
	{
		title: "Girl on train",
		rating: 7,
		hasWatched: "no" 
	},
]

	for (var i = 0; i < movies.length; i++){
		if (movies[i].hasWatched === "yes") {
			console.log("I have watched " + "\"" + movies[i].title+ "\"" + " - " + movies[i].rating + " stars");
		}else{
			console.log("I have not watched " + "\"" + movies[i].title+ "\"" + " - " + movies[i].rating + " stars");
		}
	}

// OR

	movies.forEach(function(movie){
		var result = "You have ";
		if (movie.hasWatched) {
			result += "watched ";
		}else{
			result += "not seen ";
		}
		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		console.log(result);
	})

// optimized

	function buildString(movie){
		var result = "You have ";
		if (movie.hasWatched) {
			result += "watched ";
		}else{
			result += "not seen ";
		}
		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		return result;
	}

	movies.forEach(function(movie){
		console.log(buildString(movie));
	})
