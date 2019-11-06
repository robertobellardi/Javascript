//Notazione a costruttore
var moto = new Object();

moto.marca = "Honda";
moto.modello ="Cbr";
moto.cilindrata = 800;
moto.marcia = 6;
moto.velocita = 0;
moto.num_giri = 0;

moto.accendi = function(num_giri){
this.num_giri = num_giri;
}

moto.cambiaMarcia = function(marcia){
    this.marcia = marcia;
    console.log("sei alla marcia:" + this.marcia);
}

moto.calcolaVel = function(){
    this.accendi(2000);
    this.cambiaMarcia(1);
    this.velocita = (this.num_giri / (this.marcia * 100));
    console.log("la tua velocità è di: " + this.velocita);
}

