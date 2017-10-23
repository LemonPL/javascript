// method is a function for an object

var dogSpace ={};

dogSpace.speak = function(){
	return "HowHow";
}


var dog = {
	name: "Rusty",
	age: 31,
	speak: function(name){
		return "Hi My Name is " + name;
	}
}

// examples of usage

post.delete();
post.add();

// important functions that someone wrote - underscorejs.org

var comments = {};

comments.data = ["Good Job Mate!", "I hate him", " CR again?!"]

function print(arr){
	arr.forEach(function(el){
		console.log(el);
	});
}

// an old way
print(comments.data);

// new way

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});	
}
