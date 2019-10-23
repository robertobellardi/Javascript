window.onload=function(){
    var saluto="Ciao ";
    var nome="Mario. ";
    var msg="Controlla il tuo ordine ";

    var welcome=saluto+nome+msg;

    var eleSaluto=document.getElementById("saluti");
    eleSaluto.innerHTML=welcome;

    var titolo="Il vecchio e il mare";
    var elTit=document.getElementById("titolo");
    elTit.innerHTML=titolo;

    var prezzo=10.50;
    var elPrez=document.getElementById("prezzo");
    elPrez.innerHTML="€ "+prezzo;

    var spedizione=(prezzo*0.3);
    var eleSped=document.getElementById("prezzoSped");
    eleSped.innerHTML="€ "+spedizione;
    
    var totale= prezzo+spedizione;
    var eleTot=document.getElementById("prezzoTot");
    eleTot.innerHTML="€ "+totale;
    
};