// clear() -> built-in function to clear the console in chrome dev env

function singSong(times){
	for(var i = 1; i <= times; i++){
	console.log("Twinkle, twinkle");
	console.log("little stars");
	}
}

singSong(4);

// set intervals

setInterval(singSong,10000);

// console.log(); -> goes to developer console only, not outside
// return; -> goes to external user, not console only

// interesting example

function test(x){
	return x * 2;
	console.log(x);
	return x / 2;
}

// in example above only 1st return gets executed because after the 1st return the function stops

// isEven() function

function isEven(x){
	return x % 2 === 0
}

// factorial() function

function factorial(n){
	if (n === 0) {
		return 1;
	}
	return n*factorial(n-1);
}

// OR

function factorial(n){
	var result = 1;
	for(var i =i; i <= n; i++){
		result *= i;
	}
}

// kebabToSnake() function which replaces kebab-cased to kebab_cased

function kebabToSnake(str){
	return str = str.replace("-","_");
}

// local variables vs global variables

// GLOBAL

var phrase = "Hi there";

function sayHi(phrase){
	console.log(phrase);
}
// phrase is global variable
// return "Hi there"

var phrase = "Hi there";

function sayHi(){
	phrase = "Hello";
	console.log(phrase);
}
// overwritting global variable
// return "Hello"; OVERWRITTING

var phrase = "Hi there";

function sayHi(){
	var phrase = "Hello"
	console.log(phrase);
}
// var creates local variable
// function returns "Hello", but phrase returns "Hi there"; NOT OVERWRITTING

// function sayHi() is run not when we set it up through "function", but when we actually call it sayHi();

// if function is supposed to be run just once within other function

setInterval(function(){
	console.log("anonymous function");
},2000);

// where 2000 is 2sec
