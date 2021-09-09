/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 Array of quote
***/
const quotes = [
	{quote: `To be or not to be, that is the question`, source: `William Shakespeare`, citation: `Hamlet`, year: 1609},
	{quote: `You miss 100% of the shots that you don't take - Wayne Gretzky`, source: `Michael Scott`, citation: `The Office`},
	{quote: `Ooh wee ooh I look just like Buddy Holly`, source: `Weezer`, year: 1994},
	{quote: `When you walk by a store and see 50 guys that look like you fighting over a shirt, you go in there. Yes you do.`, source: `Tim Robinson`, citation: `I Think You Should Leave`, year: 2021},
	{quote: `When you come to a fork in the road, take it.`, source: `Yogi Berra`},
	{quote: `There’s only one thing I hate more than lying: skim milk. Which is water that is lying about being milk.`, source: `Ron Swanson`, citation: `Parks and Recreation`, year: 2014}
];


/***
 Generates a random number between 0-255 that
 is returned and used to change the background
 color of the body when printQuote is called
 by being inserted as numbers for rgb color
***/

function changeBackground() {
	return Math.floor(Math.random() * 256);
};

/***
 Uses a random number to generate a number between 0, or
 the start of the array, to the last index of the array. No
 1 is added to this like a dice game because the index starts 
 at zero and not 1. It then returns the quote at that index.
***/
function getRandomQuote() {
	let quoteIndex = Math.floor(Math.random() * quotes.length);
	return quotes[quoteIndex];
}


/***
 Uses the numbers from randomBackground to set the rgb color.
 It then stores the call to getRandomQuote in a variable that is 
 used with the prop name to get the information needed to display the
 quote, which is stored in a variable quote, made up of template literala
 and HTML. This is returned and then displayed.
***/

function printQuote() {
	document.querySelector('body').style.background = `rgb(${changeBackground()},${changeBackground()},${changeBackground()})`
	let randomQuote = getRandomQuote();
	let quote = `
		<div id="quote-box" class="quote-box">
        	<p class="quote">${randomQuote.quote}</p>
        	<p class="source">${randomQuote.source}
		`;
	if ( 'citation' in randomQuote && 'year' in randomQuote ) {
		quote += `
			<span class="citation">${randomQuote.citation}</span><span class="year">${randomQuote.year}</span></p>
				</div>`;
		} else if ( 'citation' in randomQuote ) {
			quote += `
			<span class="citation">${randomQuote.citation}</span></p>
				</div>`;
		} else if ( 'year' in randomQuote ) {
			quote += `<span class="year">${randomQuote.year}</span></p>
				</div`;
		} else {
			quote += `</p>
				</div>`;
		}

	return document.querySelector('.container').innerHTML = quote;
}


/** 
	Calls printQuote every 5 seconds even if the
	click event is not called
**/

setInterval(printQuote, 5000);

/** 
	Calls printQuote as soon as the page has loaded
	so that it is no blank.
**/

document.addEventListener("load", printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);