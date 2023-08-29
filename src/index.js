
var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


function toReadable(number) {

if (typeof number !== 'number' || number < 0 || number >= 1000 || !Number.isInteger(number)) {

return number === 1000 ? 'one thousand' : 'Invalid input';
}


var numStr = number.toString();


var result = '';


switch (numStr.length) {

case 1:
result = units[number];
break;

case 2:
if (number >= 10 && number <= 19) {

result = teens[number - 10];
} else {
result = tens[Math.floor(number / 10) - 2];
if (number % 10 !== 0) {
result += '-' + units[number % 10];
}
}
break;
case 3:
result = units[Math.floor(number / 100)] + ' hundred';
if (number % 100 !== 0) {
result += ' ' + toReadable(number % 100); }
break;
default:

return 'Invalid input';
}


return result;
}
