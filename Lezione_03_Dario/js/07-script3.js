//notazione con funzione costruttore
function moto(marca, marcia, cilindrata, modello){
    this.marca = marca;
    this.marcia = marcia;
    this.cilindrata = cilindrata;
    this.modello = modello;

    this.info = function(){
        return "La moto è della marca: " + this.marca + 
        " la marcia inserita è: " + this.marcia;
    }

    this.pagaAssicurazione = function(){
        return this.cilindrata * 5;
    }
}


var moto1 = new moto("Yamaha", 6, 650, "Mt09");
var moto2 = new moto("Ducati", 5, 850, "848");


console.log(moto1.info());
console.log(moto1.pagaAssicurazione());