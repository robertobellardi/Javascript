window.onload=function(){
       
    $("#buttonNome").on("click",saluto);//es1
    
    triangolo();//es2

    $("#buttonAnno").on("click",anno);//es3

    $("#moltiplica").on("click",moltiplica);//es4
    $("#dividi").on("click",dividi);        //es4

    $("#buttonEst").on("click",estensione);//es5

    $("#buttonStringa").on("click",creaJa);//es6

    $("#max").on("click",max);//es7

    $("#buttonInv").on("click",inverti);//es8

    $("#buttonFrase").on("click",frase);//es9
    
    $("#buttonCasuale").on("click",casuale);//es10
    
    $("#maxnum").on("click",maxnum);//es11
    
    $("#stmnum").on("click",stampanum);//es13
    
    $("#trasf").on("click",trasforma);//es14
    
    $("#pesc").on("click",pesca);//es15
    
    $("#cerca").on("click",cerca);//es16


    
    
   
};

function saluto(){
    $("#nomeUtente").text("Ciao "+$("#nome").val());
}

function triangolo(){
    var perimetro=3+3+3;
    var semip=perimetro/2;
    console.log("Sempiper : "+semip);
    var area= Math.sqrt(semip*(semip-3)*(semip-3)*(semip-3));

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
    if(n1==n2)
        alert("I 2 numeri sono uguali");
    else {        
        if(Math.abs(100-n1) < Math.abs(100-n2))
            $("#maxRis").text("Il primo numero è più vicno a 100");
        else
            if(Math.abs(100-n1) > Math.abs(100-n2))
                $("#maxRis").text("Il secondo numero è più vicno a 100");
        else
            $("#maxRis").text("I due numeri sono alla stessa distanza");
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

function casuale(){  
    console.log("Entro");
    var n=$("#frasecasuale").val();
    var alfabeto="QWERTYUIOPLKJHGFDSAZXCVBNMzxcvbnmlkjhgfdsaqwertyuiop1234567890"
    console.log(alfabeto.length);
    var s=$("#frasecasuale").val();
    var s="";

    for(var i=0;i<n;i++){
        s+=alfabeto.charAt((Math.floor(Math.random() * alfabeto.length)));
    }
    $("#fraseC").text("la stringa casuale è : "+s);
}

function maxnum(){   
    var num1=$("#num1").val();
    var num2=$("#num2").val();

    if(num1>num2)
        alert("Il maggiore è : "+num1);
    else 
        alert("Il maggiore è : "+num2);
}

function stampanum(){  
    for(var i=1;i<=100;i++){
        if(i%3==0 && i%5!=0)
            console.log("Ciao");
        else if(i%3!=0 && i%5==0)
            console.log("Mondo");
        else if(i%3==0 && i%5==0)
            console.log("Ciao mondo");
        else
            console.log(i)
    }
}

function trasforma(){  
    var a=["Ciao","come","va la vita"];
    var str="";
    for(var i=0;i<a.length;i++)
        str+=a[i];
    console.log(str);
}

function pesca(){  
    var a=[1,2,3,4,5,6,7,8,9,7,5,4,3,6,5,4,5,7,4,6,56,6];
    console.log(a[(Math.floor(Math.random() * a.length))]);
}

function cerca(){  
    var str="Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java";
    var target="Jaasgqvva";
    var trovata=false;
    var x=str.split(" ");
    for(var i=0;i<x.length && !trovata;i++){
        if(x[i]==target)
            trovata=true;
    }
    
    if(trovata)
        console.log("Stringa trovata")
    else
        console.log("Stringa non trovata");
}