//Funzione con Parametri
function calcolaArea(base, altezza){
    var area = base * altezza;
    return area;
}
//posso chiamare una variabile "area" poiché quella all'interno della funzione
//è una variabile locale
var area = calcolaArea(4,5);
console.log(area);
//console.log(calcolaArea(5,4));

//espressione Funzionale
var calcArea = function(base, altezza){
    return area = base*altezza;
}

var area2 = calcArea(6,5);
