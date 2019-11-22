var arrayEle=[];

window.onload=function(){    
    maxNumber();
    loopTo15();
    loopTo100();
    stampaPattern(15);
    stampaPatternReverse(15);
    stampaPatternAlbero(25);
    sommaMultipli();
    contaOccorrenze("Ciao laura come va la vita? :P",'c');
    tipoParametro();
    contaMaxParola("Ciao laura come va la vita? :P");
    revertNome();
    setInterval(revertNome,500);
    rimuoviDup();
    inserisciTrattino("1245780");
    sommaArray();
    unioneArray();
}

//Esercizio 1 
function maxNumber(){
    
    var numeri=[12,78,54,1982,41];
    var max=0;
     
    console.log("Escerizio 1");
    
    for(var i=0;i<numeri.length;i++){
        if(numeri[i]>max)
            max=numeri[i];
    }
    
    console.log("il numero massimo è ---> "+max);
    console.log("");
}

//Esercizio 2 
function loopTo15(){
    console.log("Escerizio 2");
    
    for(var i=0;i<=15;i++){
        if(i%2==0)
            console.log("Numero pari ---> la i è "+i);
        else
            console.log("Numero dispari ---> la i è "+i);
    }
    console.log("");
}

//Esercizio 3 
function loopTo100(){
    console.log("Escerizio 3");
    
    for(var i=0;i<=100;i++){
        if(i%3==0 && i%5==0)
            console.log("Numero divisibile per 3 e 5");        
        else if(i%3==0)
            console.log("Zoom");
        else if(i%5==0)            
            console.log("Boom");
    }
    console.log("");
}

//Esercizio 4 
function stampaPattern(pattern){
    console.log("Escerizio 4");
    var stampa="";
    for(var i=0;i<pattern;i++){
        for(var j=0;j<i;j++)
            stampa+="*";
        console.log(stampa);
        stampa="";
    }
    console.log("");
}

//Esercizio 4.1 
function stampaPatternReverse(pattern){
    console.log("Escerizio 4.1");
    var stampa="";
    for(var i=0;i<pattern;i++){
        for(var j=0;j<pattern-i;j++)
            stampa+=" ";
        for(var j=pattern-i;j<pattern;j++)
            stampa+="@";
        console.log(stampa);
        stampa="";
    }
    console.log("");
}

//Esercizio 4.2 
function stampaPatternAlbero(pattern){
    console.log("Escerizio 4.2");
    var stampa="";
    for(var i=0;i<pattern;i++){
        for(var j=0;j<(pattern-i)/2;j++)
            stampa+=" ";
        for(var j=(pattern-i)/2;j<(pattern/2)+i+1;j++)
            stampa+="*";
        console.log(stampa);
        stampa="";
    }
    console.log("");
}

//Esercizio 5 
function sommaMultipli(){
    console.log("Escerizio 5");
    var somma=0;
    for(var i=0;i<=1000;i++){
        if(i%3==0 || i%5==0)
            somma+=i;
    }
    console.log("La somma è ---> "+somma);
    console.log("");
}

//Esercizio 6 
function contaOccorrenze(str,car){
    console.log("Escerizio 6");
    var cont=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==car)
            cont++;
    }
    console.log("Le occorenze sono ---> "+cont);
    console.log("");
}

//Esercizio 7 
function tipoParametro(tipo){
    console.log("Escerizio 7");
    
    if(typeof tipo == "undefined")
        console.log("E indefinito");
    else if(typeof tipo == "object")
        console.log("E un oggetto");
    else if(typeof tipo == "function")
        console.log("E una funzione");
    else if(typeof tipo == "String")
        console.log("E una stringa");
    else if(typeof tipo == "number")
        console.log("E un numero");      
       
    console.log("");
}

//Esercizio 8 
function contaMaxParola(str){
    console.log("Escerizio 8");
    var cont=0;
    var vetparole=str.split(" ");
    var maxparola=vetparole[0];
    for(var i=1;i<vetparole.length;i++){
        if(maxparola.length<vetparole[i].length)
            maxparola=vetparole[i];
    }
    
    console.log("La paroal più lunga è  ---> "+maxparola);
    console.log("");
}

//Esercizio 9 
function revertNome(){
    var str=document.getElementById("revertNome").textContent;
    var newStr="";
    for(var i=1;i<str.length;i++)
        newStr+=str[i];
    newStr+=str[0];
    document.getElementById("revertNome").innerHTML=newStr;
}

//Esercizio 10 
function inserisciTrattino(numero){
    console.log("Escerizio 10");
    var str="";
    
    for(var i=0;i<=numero.length-1;i++){
        if(numero[i]%2==0 && numero[i+1]%2==0)
            str+=numero[i]+"-";
        else
            str+=numero[i];    
    }    
    console.log(str);
    console.log(""); 
}

//Esercizio 11 
function aggiungiEle(){
    console.log("Escerizio 11");
    arrayEle.push(document.getElementById("inputEle").value)
    console.log("Inserito");
    console.log("");
}

//Esercizio 11
function stampaArrayEle(){
    console.log(arrayEle);
    console.log("");
}

//Esercizio 12
function rimuoviDup(){
    console.log("Esercizio 12");
    
    var array1 = [1,0,2,4,6,4,1,4,1];
    var array2=[];
    array2.push(array1[0]);
    for(var i=1;i<array1.length;i++){
        if(!check(array2,array1[i]) && array2.push(array1[i]));    
    }
    
    console.log(array2);
    console.log("");
}

function check(array,num){
    for(var i=0;i<array.length;i++){
        if(array[i]==num)
            return true;
    }
    return false;
    
}

//Esercizio 13
function sommaArray(){
    console.log("Escerizio 13");
    
    var array1 = [1,0,2,4,6];
    var array2 = [0,4,5,8,7];
    var arraySomma=[];
    
    for(var i=0;i<array1.length;i++)
        arraySomma.push(array1[i]+array2[i]);
    
    console.log(arraySomma);    
    console.log(""); 
}

//Esercizio 14
function unioneArray(){
    console.log("Escerizio 14");
    
    var array1 = [1,0,2,4,6];
    var array2 = [0,4,5,8,7];
    var arrayUnito=array1;
    var presente=false;
    
    for(i=0;i<array2.length;i++){
        for(var j=0;j<arrayUnito.length && !presente;j++){
            if(array2[i]==arrayUnito[j])
                presente=true;
        }
    if(!presente)
        arrayUnito.push(array2[i]);
    presente=false;
    }
            
    console.log(arrayUnito);
    console.log(""); 
}