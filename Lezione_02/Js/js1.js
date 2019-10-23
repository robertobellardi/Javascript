var messaggio = "Benvenuto :D";
var numero=124.458741;
var x1=true;
var x2=false;
var x3=new Date();
var x4="123"
var x5="123 555";

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
    $("#demo").text("Numero = "+numero);
    $("#demo").text("Numero arrotondato = "+numero.toFixed(3));
    
    var n= 
        Number(x1) +"<br>"+
        Number(x2) +"<br>"+
        Number(x3) +"<br>"+
        Number(x4) +"<br>"+
        Number(x5) +"<br>";       
    document.write(n+"<br>");
    
    var a= parseInt("10") +"<br>";
    var b= parseInt("10.99") +"<br>";
    var c= parseInt("10.00") +"<br>";
    var d= parseInt("20 46 14") +"<br>";
    var e= parseInt(" 41 ") +"<br>";
    var f= parseInt("30 anni") +"<br>";
    var g= parseInt("Avevo 20 anni") +"<br>";

    var n2=a+b+c+d+e+f+g;
    document.write(n2+"<br>");

    var h= parseInt("10", 10) +"<br>";
    var i= parseInt("010",2) +"<br>";
    var l= parseInt("8",2) +"<br>";
    var m= parseInt("0x10",16) +"<br>";

    var n3=h+i+l+m;
    document.write(n3+"<br>");

    var p1=2;
    var p2=6;

    var e1=eval("p1 * p2")+"<br>";
    var e2=eval("p1 + p2")+"<br>";
    var e3=eval("p1 + 50")+"<br>";

    var ris=e1+e2+e3;
    document.write(ris+"<br>");

    var f1="15.23"+"<br>";
    var f2=15.23;

    document.write(parseFloat(f1));
    document.write("<br>");
    document.write(parseFloat(f2));
    document.write("<br>");

    var nan="ciao";
    var nan1=50;

    document.write(isNaN(nan)+"<br>");
    document.write(isNaN(nan1)+"<br>");


    var mat=Math.abs(-1);
    var mat1=Math.sqrt(150);
    var mat2=Math.pow(10,5);

    this.console.log(mat+" "+mat1+" "+mat2);

    var oggi=new this.Date();
    this.console.log(oggi);

    var born=new this.Date("Jun 24,1994 13:00:00");

    this.console.log((oggi.getTime()-born.getTime())/31536000000);
        


};



//funzioni autoinvocanti IIFE
(function(){
    console.log("Ciao :D");
}());
