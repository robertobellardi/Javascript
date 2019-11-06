//valore assoluto
var a = Math.abs(-1);
var a1 = Math.abs('-2');

console.log(a);
console.log(a1);

//Radice
var r = Math.sqrt(9);
var r2 = Math.sqrt(2);

console.log(r);
console.log(r2);

//Potenza
var p = Math.pow(2, 2);
var p2 = Math.pow(7, 3);

console.log(p);
console.log(p2);

//Ceil e Floor 
//Ceil arrotonda all'intero maggiore più vicino
//Floor arrotonda all'intero minore più vicino

var c = Math.ceil(10.01);
var f = Math.floor(10.01);

console.log(c);
console.log(f);

//Round
var ro = Math.round(20.49);
var ro1 = Math.round(20.5);

console.log(ro);
console.log(ro1);

//Trunc, taglia le cifre dopo la virgola
var t = Math.trunc(12.22);
console.log(t);

//Random
var rand = Math.floor((Math.random() * 10) + 1);
console.log(rand);