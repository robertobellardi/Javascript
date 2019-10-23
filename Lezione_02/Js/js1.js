 var messaggio = "Benvenuto :D";

function sayHello(){
    alert("Ciao");
}    

function benvenuto(){
    document.getElementById("benvenuto").innerHTML=messaggio;
}

function calcolaArea(base,altezza){
   return base*altezza;        
}

function stampa(stampa){
    var tit=$("<h1></h1>").text(stampa);
    $("body").append(tit);
}

function print(){    
    $("#demoNomeCognome").text($("#nome").val()+" "+$("#cognome").val());
}

function area(){    
    $("#demoArea").text("L area è "+(($("#base").val()*$("#altezza").val())/2));
}

function entrambe(){
    print();
    area();
}


window.onload=function(){
       
    $("#buttonNomeCognome").on("click",print);
    $("#buttonArea").on("click",area);
    $("#entrambe").on("click",entrambe);   

};



//funzioni autoinvocanti IIFE
(function(){
    
    
}());
