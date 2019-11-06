function studente(nome,cognome,postazione,anno){
    this.nome=nome;
    this.cognome=cognome;
    this.postazione=postazione;
    this.anno=anno;

    this.stampa = function(){
        console.log(this.nome+" "+this.cognome+" "+this.postazione+" "+this.anno);
    }
    
    this.aggiungiInTabella= function(){
        console.log("Entro");
        var tr=$("<tr></tr>");
        var td1=$("<td></td>").text(this.nome);
        var td2=$("<td></td>").text(this.cognome);
        var td3=$("<td></td>").text(this.postazione);
        var td4=$("<td></td>").text(this.anno);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        $("#tabella").append(tr);
    }
    
}

var studenti= [
    new studente("Roberto","Bellardi",13,1994),
    new studente("Aloi","Eugenio",14,1992),
    new studente("Mihai","Fedot",15,1995),
    new studente("Alessia","Balconetti",16,1996),
    new studente("Federica","Loise",17,1990),
    new studente("Andrea","Lorenzoni",18,1993),
    new studente("Oana","Cerbu",7,1992),
    new studente("Laura","Conti",8,1994),
    new studente("Matteo","Calfa",9,1997),
    new studente("Chiara","Businaro",10,1992),
    new studente("Mattia","Isoldi",11,1996),
    new studente("Biagio","Ingusci",12,1904),
    new studente("Ahmed","Haboula",1,1995),
    new studente("Mattia","Montenegro",2,1994),
    new studente("Javier","de la Fuente",3,1996),
    new studente("Mariarita","Masia",5,1993),
    new studente("Piero","Baglivo",6,1993)
    ];

window.onload=function(){

for(var i=0;i<studenti.length;i++)
    studenti[i].aggiungiInTabella();
}