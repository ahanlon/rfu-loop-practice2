// Loop-Practice #2

//Problem 1.

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for (var i=0; i<(animals.length - 1); i++) {
	console.log(animals[i]);
}

//Problem 2.
for (var i=0; i<(animals.length); i+=2) {
	console.log(animals[i]);
}

// Problem 3.
for (var i=(animals.length -1); i>=0; i--){
	console.log(animals[i]);
};

//Problem 4.

for (var i=0; i<(animals.length -1); i++){
	console.log(animals[i]);
	for (var j=(i+1); j<=(i+1); j++) {
	console.log(animals[j]);
	}
};