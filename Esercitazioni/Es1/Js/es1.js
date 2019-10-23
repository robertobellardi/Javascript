window.onload=function(){
       
    $("#buttonNome").on("click",saluto);
    
    triangolo();

    $("#buttonAnno").on("click",anno);

    $("#moltiplica").on("click",moltiplica);
    $("#dividi").on("click",dividi);

    $("#buttonEst").on("click",estensione);

    $("#buttonStringa").on("click",creaJa);

    $("#max").on("click",max);

    $("#buttonInv").on("click",inverti);

    $("#buttonFrase").on("click",frase);


    
    
   
};

function saluto(){
    $("#nomeUtente").text("Ciao "+$("#nome").val());
}

function triangolo(){
    var perimetro=5+6+7;
    var semip=perimetro/2;
    var area= Math.sqrt(semip*(semip-5)*(semip-6)*(semip-7));

    $("#perimetro").text("Il perimetro e : "+perimetro);
    $("#area").text("L'area e : "+area);
}

function anno(){
    $("#eta").text((("L'età è : "+( $("#anno").val() - $("#nascita").val() ))));

}

function moltiplica(){
    $("#risultatom").text((("Il prodotto è  : "+( $("#numero1").val() *  $("#numero2").val() ))));

}

function dividi(){
    $("#risultatod").text((("La differenza è  : "+( $("#numero1").val() /  $("#numero2").val() ))));

}

function estensione(){   
    var s=$("#stringaEst").val();
    console.log("L'estensione è : "+s.substring(s.indexOf("."),s.length));

}

function creaJa(){   
    var s=$("#stringa").val();

    if(s.substring(0,2)=="Ja")
        $("#stringaJa").text(s);
    else
    $("#stringaJa").text("Ja"+s);

}

function max(){   
    var n1=$("#n1").val();
    var n2=$("#n2").val();
    console.log(n1+" "+n2);

    if(n1==n2)
        alert("I 2 numeri sono uguali");
    else {
        if(Math.abs(100-n1) < Math.abs(100-n2))
            $("#maxRis").text("Il primo numero è più vicno a 100");
        else
            $("#maxRis").text("Il secondo numero è più vicno a 100");
    }
}

function inverti(){  
    var s=$("#stringaInv").val();
    var sinv="";

    for(var i=s.length-1;i>=0;i--)
        sinv+=s.charAt(i);
    $("#inverti").text("la stringa al contrario è : "+sinv);

}

function frase(){  
    console.log("Entro"); 
    var s=$("#frase").val();
    var sm="";

    for(var i=0;i<s.length;i++){
        if(i==0 || (i>0 && s.charAt(i-1)==" "))
            sm+=(s.charAt(i).toUpperCase());
        else
        sm+=(s.charAt(i));
    }
    $("#fraseM").text("la stringa maiuscola è : "+sm);

}