var torta ={
    nome: 'Fantasia di cioccolato',
    prezzo: 30,
    sconto: 25,
    imgTorta: './torta.jpg',
    
    prezzoOfferta : function(){
        var costoFinale = this.prezzo * ((100-this.sconto)/100);
        return costoFinale;
    }
};


var eltortaNome = document.getElementById('tortaNome1');
var elprezzoTorta = document.getElementById('prezzoTorta1');
var elprezzoSpeciale = document.getElementById('prezzoSpeciale1');
var elImg = document.getElementById('imgTorta1');

eltortaNome.innerHTML = torta.nome;
elprezzoTorta.innerHTML = 'Prezzo €: ' + torta.prezzo;
elprezzoSpeciale.innerHTML = "Prezzo Scontato € : " + torta.prezzoOfferta();
elImg.innerHTML = "<img width='30%' src=" + torta.imgTorta + ">"

var torta2 ={
    nome: 'Torta al cioccolato',
    prezzo: 40,
    sconto: 15,
    imgTorta: 'Torta-al-cioccolato.jpg',
    
    prezzoOfferta : function(){
        var costoFinale = this.prezzo * ((100-this.sconto)/100);
        return costoFinale;
    }
};


var eltorta2Nome = document.getElementById('tortaNome2');
var elprezzo2Torta = document.getElementById('prezzoTorta2');
var elprezzo2Speciale = document.getElementById('prezzoSpeciale2');
var el2Img = document.getElementById('imgTorta2');

eltorta2Nome.innerHTML = torta2.nome;
elprezzo2Torta.innerHTML = 'Prezzo €: ' + torta2.prezzo;
elprezzo2Speciale.innerHTML = "Prezzo Scontato € : " + torta2.prezzoOfferta();
el2Img.innerHTML = "<img width='30%' src=" + torta2.imgTorta + ">"

//Costruisco il giorno dell'offerta

function offertaScadenza(oggi){

var settDaOggi, day, date, month, year, nomeGiorni, nomeMesi;

settDaOggi = new Date(oggi.getTime() + 7 * 24 * 60 * 60 * 1000);

nomeGiorni = ['Domenica','Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
nomeMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre','Ottobre','Novembre','Dicembre'];

day = nomeGiorni[settDaOggi.getDay()];
date = settDaOggi.getDate();
month = nomeMesi[settDaOggi.getMonth()];
year = settDaOggi.getFullYear();

var msgScad = 'Le offerte scadranno il: ';
msgScad += day + " prossimo <br>" + "( " + date + " " + month + " " + year + " )";
return msgScad;
}

oggi = new Date();

var elscadFine = document.getElementById('offertaFine');
elscadFine.innerHTML = offertaScadenza(oggi);