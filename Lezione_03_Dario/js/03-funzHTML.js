//qUESTA funzione viene chiamata dal HTML, la sua dichiarazione, in ordine di tempo,
//è indipendente dalla sua dichiarazione
function saluta(){
    alert("Ciao " + nome);
}

var nome = window.prompt('Scrivi il tuo nome');