var mess = 'Ora che sei iscritto alla newsletter CACCIA i soldi!'
function benvenuto(){
    var elBenv = document.getElementById('benvenuto');
    elBenv.innerHTML = mess;
}
//Creo la funzione
function sayHello(){
    alert('Ciao, per accedere al sito DEVI iscriverti alla nostra Newsletter');
}
//Richiamo

benvenuto();
sayHello();
