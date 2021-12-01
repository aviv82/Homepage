"use strict";

// this page will document my explorations in js

// ^ this is how you make a single line comment

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
