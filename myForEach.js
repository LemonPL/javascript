// REMEMBER REFERRING TO FUNCTION IS and it gives function definition through "functionName", but actually executing it is "functionName()" 

function myForEach(arr, func) {
	// loop through array
	for (var i = 0 ; i < arr.length; i++){
		// call func in each item in an array
		func(arr[i]);
	}
}

var colors = ["red","blue","green"];

// as "func" we can use whatever the function we want, even create a new one

myForEach(colors, alert);

// below is how to add method to object such as colors.forEach

array.prototype.myForEach = function(func){
	for(var i = 0;  i < this.length; i++){
		func(this[i]);
	}
}

// "this" refers to given object
