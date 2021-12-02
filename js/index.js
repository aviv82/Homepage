// this page will document my explorations in js

"use strict";

/* ^ quick note before we get started. 
the above text is a generic bit of code identifying the page as js 
similar to !DOCTYPE for html */

// this is how you make a single line comment

/* this is how you make a multiple lines comment

blah blah blah */

// below will follow a summary of the stuff i learned on code-academy:

//let's write something in the console:

console.log("something");

/* ^ a console is an - object - a built in object to be exact
and .log is a - property - a kind of command,
in this case the command is to 'log' or write the content in 
the brackets in the console. */

// let's try that again:

console.log(12);

/* ^ speaking of 'content', there are a few different categories of - data -
in js. - numbers - are the first category. we are talking about pure numbers here
not numbers as ordinals or parts of text. 
in the example above wee see that pure numbers are not written in quotations when 
we want to log them */

// lets keep this going:

console.log("@@@ i know 4 things about js ###");

/* ^ the second category of data in js are - strings -. 
strings are characters like letters, numbers and symbols. 
strings can be used to communicate messages regarding the code 
to other developers it is an effective way of note taking 
for the people who will inspect your work */

console.log("so far so good?");

// alright lets talk about numbers a bit more:

console.log(22 + 22);

/* ^ the above log contains an - arithmetic operator -
arithmetic operators include basic functions such as
addition; + 
subtraction; -
multiplication; *
division; /
let's look at some of these: */

console.log(12 - 8);
console.log(7 * 8);
console.log(99 / 11);

/* by the way, we can also use comments in the middle
of an expression. lets try that: */

console.log(9875 /* i want to divide this by 37 >>> */ / 37);

// ooh thats an ugly number :(

/* ok stay on track here aviv. with arithmetics we can
create more advanced calculations using brackets like so:*/

console.log((7 - 8) * (9 / 3));

/* another arithmetic function is %. this function will divide 
the first number by the second and print the rounded down difference 
to the closest lower number. example; */

console.log(22 % 8);

/* thats enough arithmetics for now. lets look at a few other properties: */

console.log("carolina".length);

/* ^ check this out. here we have a property inside the .log property.
this particular property breaks a string into the number of characters it contains, 
i.e. its 'length'. because the .length property is inside the log property
the console is going to print out the length or '8' */

console.log("imagine this but louder".toUpperCase());

/* ^ another similar example, but not the same. the above property is in fact a
- method - a way of phrasing the data. the method in our case 
changes the way (or method) the string will be printed */

console.log(Math.floor(5.673429));

/* ^ alright, lets go back to objects, specifically built-in objects. 
math is another type of built in object - numbers, and it can be amended 
using methods and properties such as .floor which rounds non complete numbers down. */

// lets run the same number again through a different method

console.log(Math.ceil(5.673429));

// ^ this time the method rounded the same number up rather than down

// ok that was lesson 1 will do this again soon

// lesson 2 - variables:

/* there are a few types of variables. the old school one is - var
var is limited in ways i don't fully understand yet. new js ES6 and up 
invented - let which is more compatible again, not sure how/why but this
is the one to use. then there is - const which is a variable which cant be reassigned.
const also must be assigned a value when declared. */

var callMe = "maybe";

console.log(callMe); //will print - maybe (string assigned to var)

let myAge = 39;
/* note the way we name these things, first word is lowercase, first letter of next is uppercase.
this is called - camel case */

console.log(myAge);

// let variables can be reassigned. let's try that:

myAge = 40;

// ^ variables can be assigned various types of data, such as strings, numbers and booleans.

console.log(myAge);

/* ^ to reassign we just need to write the name of the variable 
and assign a new value via the = property */

const thisMuchIs = true;

console.log(thisMuchIs);

/* ^ now with const variables we cant reassign. if we try that we will get an error.
also we must assign a value as soon as we declare a const, otherwise we get a syntax error */

let theAnswerIs;

// let (and var) variants can just be left unassigned nbd

console.log(theAnswerIs);

// an unassigned variable is by default - undefined

// alright lets look at how variables work with arithmetic properties (see above)

let xMark = 22;
let gMark = 16;
let cMark = 7;
let sMark = 46;
let fMark = 2;

console.log(xMark + xMark);
console.log(cMark - fMark);
console.log(gMark / fMark);
console.log(sMark * xMark);

// lets kick it up a notch:

console.log((cMark % fMark) + (gMark - xMark));

// we can also use arithmetic properties with string assignments:

let theresALimitTo = "your love";
let papaWasA = "rolling stone";
let itsAll = "in the game";

console.log("how deep is " + theresALimitTo + "?");
console.log("like a " + papaWasA);

/* this leads us to - interpolate values - another new-ish feature introduced with ES6.
interpolate values allow us to skip the arithmetic properties when connecting strings */

console.log(`is ${theresALimitTo} a ${papaWasA} or a piece ${itsAll}?`);

// ^ make sure to use `` to bind the interpolation and not regular ''

// back to arithmetics and numbers

let aMark = 80;
let bMark = 40;
let nMark = 20;

// we can reassign number values using arithmetic properties

nMark -= 1;

console.log(nMark); // will print 19

// but wait! theres more lol
nMark = 20; // lets reset the original reassignment

nMark--;

/* ^ instead of writing a long expression - nMark -= 1; - we can write the above short form
and get  the same value, a subtraction by increment of one*/

console.log(nMark);

// some more examples

bMark++;
aMark--;

console.log(bMark / aMark);

// alright last thing for lesson two

// we can use the property - typeof - to identify the type of data in a variable

const dontBe = "cruel";
const toAHeartThats = true;
const repeatChorusX = 2;

console.log(typeof dontBe); // will print - string
console.log(typeof toAHeartThats); // will print - boolean
console.log(typeof repeatChorusX); // will print - number

// end of lesson 2
