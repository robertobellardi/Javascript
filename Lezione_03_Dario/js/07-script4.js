function Studente(nome, cognome, matricola, anno){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.anno = anno;

    this.presentati = function() {
        var stu = "Lo studente: " + this.nome + " " + this.cognome;
        stu += " è nato nel : " + this.anno;
        stu += "La sua matricola è : " + this.matricola;
        return stu;
    }
}

Studente.prototype

var studenti = [
    new Studente ("Roberto" , "Bellardi", 13, 1994),
    new Studente ("Eugenio", "Aloi", 14, 1992),
    new Studente ("Mihai", "Fedot", 15, 1995),
    new Studente ("Alessia", "Balconetti", 16, 1996),
    new Studente ("Federica", "Luise", 17, 1990),
    new Studente ("Andrea", "Lorenzoni", 18, 1993),
    new Studente ("Oana", "Cerbu", 7, 1992),
    new Studente ("Laura", "Conti", 8, 1994),
    new Studente ("Matteo" , "Calfa", 9, 1997),
    new Studente ("Chiara", "Businaro", 10, 1992),
    new Studente ("Mattia", "Isoldi", 11, 1996),
    new Studente ("Biagio", "Ingusci", 12, 1904),
    new Studente ("Ahmed", "Haboula", 1, 1995),
    new Studente ("Mattia", "Montenegro", 2, 1994),
    new Studente ("Javier", "de la Fuente", 3, 1996),
    new Studente ("Mariarita", "Masia", 5, 1993),
    new Studente ("Piero", "Baglivo", 6, 1993)
];


for (s in studenti){
    console.log (studenti[s].presentati());
}

for (var i = 0; i < studenti.length; i++){
    console.log (studenti[i].presentati());
}


//Notazione letterale

var studenti2 = [
    {nome:"Roberto", cognome: "Bellardi", anno: 1994, matricola: 13}
]


//Notazione JSON
var studente3 = {"nome": "Roberto", "cognome": "Bellardi", "anno":"1994", "matricola":"13"}
