import * as promptSync from 'prompt-sync';
const prompt = promptSync();
//prompt for inputing words to the variables in this list
let npnoun = "";
//number plural noun for npnoun
let verbing = "";
let verbing2 = "";
//verb ending in ing
let noun = "";
let noun2 = "";
let noun3 = "";
let noun4 = "";
let noun5 = "";
let adj = "";
let adj2 = "";
let adj3 = "";
//adj for adjective
let pnoun = "";
let pnoun2 = "";
let pnoun3 = "";
let pnoun4 = "";
//plural noun for pnoun
let verb = "";
let number = "";
let number2 = "";
let body = "";
let body2 = "";
//body for body parts
let adverb = "";
let adverb2 = "";

console.log('Please give me a noun\n');
noun = prompt("noun: ")

console.log('Please give me another noun\n');
noun2 = prompt("noun 2: ")

console.log('Please give me another noun\n');
noun3 = prompt('noun 3: ')

console.log('Please give me another noun\n');
noun4 = prompt('noun 4: ')

console.log('Please give me another noun\n');
noun5 = prompt('noun 5: ')

console.log('Please give me a number plural noun\n');
npnoun = prompt("number plural noun: ")

console.log('Please give me a verb ending in ing\n');
verbing = prompt("verb ending in ing: ")

console.log('Please give me a verb ending in ing\n');
verbing2 = prompt("verb ending in ing 2: ")

console.log('Please give me an ajective\n');
adj = prompt('ajective: ')

console.log('Please give me another ajective\n');
adj2 = prompt('ajective 2: ')

console.log('Please give me another ajective\n');
adj3 = prompt('ajective 3: ')

console.log('Please give me a plural noun\n');
pnoun = prompt("plural noun: ")

console.log('Please give me another plural noun\n');
pnoun2 = prompt("plural noun 2: ")

console.log('Please give me another plural noun\n');
pnoun3 = prompt("plural noun 3: ")

console.log('Please give me another plural noun\n');
pnoun4 = prompt("plural noun 4: ")

console.log('Please give me a verb\n');
verb = prompt("verb: ")

console.log('Please give me a number\n');
number = prompt("number: ")

console.log('Please give me another number\n');
number2 = prompt("number 2: ")

console.log('Please name me a body part\n');
body = prompt("body part: ")

console.log('Please name me another body part\n');
body2 = prompt("body part 2: ")

console.log('Please give me an adverb\n');
adverb = prompt("adverb: ")

console.log('Please give me another adverb\n');
adverb2 = prompt("adverb 2: ")

console.log('A recent survey informs us that one out of every '+npnoun+' owns a/an '+adj+' phone. ');
console.log('Fortunately, '+verbing+' over a mobile '+noun+' in recent years has improved '+adverb+'. Today, body-');
console.log('held '+pnoun+' are all the rage. In restaurants, you find many '+pnoun2+' talking '+adverb2+' into');
console.log('their '+adj2+' phones as they eat their '+noun2+'. '+number+' percent of American '+pnoun3+' place');
console.log('their '+noun3+' calls from their cars as they are '+verbing2+' to and from their home, office, or '+noun4+'. ');
console.log('Walking and talking are now the “in” '+noun5+' to do. Over '+number2+' percent of Americans walk ');
console.log('our '+adj3+' streets with a handheld ' +pnoun4+ ' pressed against their ' + body2 +'.\n');

console.log('Thanks For Playing My Game');