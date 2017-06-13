/*
var Tony = {
	firstname: 'Tony',
	lastname: 'Alicea',
	address: {
		street: '111 Main Street',
        city: 'New York',
        state: 'NY'
	}
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);

greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

Tony.address2 = {
    street: '333 Second Str.'
}

console.log(Tony);
*/



/*
var english = {};
var spanish = {};

english.greetings = {};

english.greetings.greet = 'Hello!';
spanish.greet = 'Hola';

console.log(english);
*/


/*
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
*/

/* Functions are Objects 
They have a name property and a code property which is invokable with parentheses,
they also have primitve propertys (name -> value) and methods
*/

/*
function greet() {
    console.log('hi');
}

greet.language = 'english';
console.log(greet.language);
*/

/* Function Statements and Functions Expressions */

// Function Statement

/*
function greet() {
    console.log('hi');
}
*/

// Function Expression
// Anonymous Function
// Is not hoisted

/*
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();
*/

/*
function log(a) {
    a();
}

log(function() {
    console.log('hi');
});
*/





// By Value vs. by Reference

/*
// Primitive Value:
// value in memory
var a;

// copy is being generated in memory -> this is by value
var b = a;


// Object:
// value in memory
var a;

// points to the same location in memory -> this is by reference
var b = a;
*/






/*
// examples: by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects including functions)

var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate 
}

changeGreeting(d);
console.log(c);
console.log(d);


// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c);
console.log(d);

d = c;
console.log(c);
console.log(d);

*/








/*
//Functional Programming

var arr1 = [1,2,3];
console.log(arr1);

function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    
    return newArr;
    
}

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});

console.log(arr2);



var arr3 = mapForEach(arr1, function(item){
    return item > 3;
});

console.log(arr3);



var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));

console.log(arr4);









var simplifiedCheckPastLimit = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, simplifiedCheckPastLimit(3));
console.log(arr5);

// End Functional Programming
*/









/*
// Underscore.js Examples

var mappedArr = _.map([1,2,3], function(num){return num * 4});
console.log(mappedArr);

var mappedArr2 = _.map({one: 1,two: 2,three: 3}, function(num, key){if(num==1){return key + 'first '}else{return key + ' yeah'}});
console.log(mappedArr2);
*/










/*
// Functions Constructors and .prototype

// Function Constructors laut Convention benutzen, welche lautet: 
// Wenn eine Funktion als Constructor um Objekte zu erzeugen verwendet wird
// dann wir der erste Buchstabe der Funktion immer gross geschrieben. Das 
// sollte vermeiden, dass man das 'new' Keyword zum generieren des Objektes vergisst.

function Person(firstname,lastname) {
    
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This Function is invoked');

}

// Methoden am besten immer mit .prototype erstellen, dann
// braucht es viel weniger Arbeitsspeicher und die Methode 
// ist für jedes Objekt verfügbar 

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John','Doe');
console.log(john);

var jane = new Person('Jane','Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());
*/





/*
// Built in Function Constructors
// z.B. String erweitern

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));
*/






/*
// Dangerous Aside - Arrays and for in loops

Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

// Don't use 'for in' loops for arrays because if somebody added
// a prototype it will show also the prototype as a value

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

// Do it that way!! 

for (var i = 0; i < arr.length; i++) {
    console.log(i + ': ' + arr[i]);
}
*/



/*
// Creating 1000 Objects out of a Text File

var arr = [];
var objArr = [];


var person = {
    firstname: 'Default',
    lastname: 'Default',
    sayHello: function() {
        console.log('Hi ' + this.firstname);
    }
}


var createPersonObject = function(firstname, lastname) {
    var obj = Object.create(person);
    obj.firstname = firstname;
    obj.lastname = lastname;
    return obj;
}


$.get('/Users/tomschall/Documents/understanding_javascript/vornamen.txt', function(data) {
    arr = data.split('\n');
    console.log(arr[0]);
    
    for (var i = 0; i < arr.length; i++) {
        objArr[i] = createPersonObject(arr[i],arr[i]);
        console.log(objArr[i]);
    }
});

*/




var g = G$('Thomas', 'Schallert');
console.log(g);
g.greet().setLang('es').greet(true).log();

g.HTMLGreeting();



