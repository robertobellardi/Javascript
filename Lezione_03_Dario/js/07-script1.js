//Notazione Letterale Oggetto Javascript
var moto ={
    marca: "Kawasaki",
    modello: "Z750",
    cilindrata: 750,

    marcia: 6,
    velocita: 0,
    num_giri: 1000,

    acceso: false,

    accendi: function(num_giri){
        this.num_giri = num_giri
    },

    cambiaMarcia: function(marcia){
        this.marcia = marcia;
        console.log("hai cambiato marcia !");
        console.log("sei alla marcia: " + this.marcia);
    },

    calcolaVel: function(){
        this.accendi(2000);
        this.cambiaMarcia(1);
        this.velocita = (this.num_giri / (this.marcia * 100));
        console.log("la tua velocità è di: " + this.velocita);
    }
}

console.log(moto.marca);

moto.calcolaVel();