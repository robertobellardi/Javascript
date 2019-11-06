var numOriginale = 12.23545;

var elInfo = document.getElementById('info');

var msg = '<p> Il numero originale è ' + numOriginale + '</p>';

//arrotondamento
msg += '<p> Il num arrotondato a 3 decimali è :' + numOriginale.toFixed(3) + '</p>';

//cifre significative
msg += '<p>Ho solo 3 cifre significative: ' + numOriginale.toPrecision(3) + '</p>';

elInfo.innerHTML = msg;

//OGGETTO NUMBER

var x1 = true;
var x2 = false;
var x3 = new Date();
var x4 = '123';
var x5 = '123 555';

var n = 
Number(x1) + '<br>' +
Number(x2) + '<br>' +
Number(x3) + '<br>' +
Number(x4) + '<br>' +
Number(x5);

document.write(n);

//PARSEINT
var a = parseInt("10") + '<br>'
var b = parseInt("10.99") + '<br>'
var c = parseInt("10.00") + '<br>'
var d = parseInt("20 46 14") + '<br>'
var e = parseInt(" 41 ") + '<br>'
var f = parseInt("30 aNNI") + '<br>'
var g = parseInt("Avevo 20 anni") + '<br>' ;

var h = parseInt('10', 10) + '<br>'; //Decimale
var i = parseInt('010') + '<br>';
var j = parseInt('111011', 2) + '<br>'; //Binario
var k = parseInt('15', 16) + '<br>'; // esadecimale

var n2 = a + b+ c + d + e + f + g + h + i +j +k ;

document.write('<br> ' + n2 + '<br>');

//Funzione Eval
var p1 = 2;
var p2 = 6;

var e1 = eval('p1 * p2') + '<br>';
var e2 = eval('p1 + p2') + '<br>';
var e3 = eval('p1 + 50') + '<br>';

var ris = e1 + e2 + e3;

document.write(ris);


//ParseFloat
var f1 = "15.23";
var f2 = 15;
document.write(parseFloat(f1) + "<br>");
document.write(parseFloat(f2) + "<br>");

//isNaN
var nan = "ciao";
var nan2 = 50;

document.write(isNaN(nan) + '<br>');
document.write(isNaN(nan2) + '<br>');

if(typeof nan == "number"){
    console.log('non è un numero');
}else{
    console.log('è un numero');
}