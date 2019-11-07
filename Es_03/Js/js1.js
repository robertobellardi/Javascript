function studente(nome,cognome,matricola){
    this.nome=nome;
    this.cognome=cognome;
    this.matricola=matricola;

    this.stampa = function(){
        var div=$("<div></div>");
        div.addClass("studente");
        div.append($("<label></label><br>").text("Ciao : "+this.nome+" "+this.cognome));
        div.append($("<br><label></label>").text("Matricola numero : "+this.matricola));
        $("#form").append(div);
    }
        
}

window.onload=function(){
    $("#invia").on("click",checkAndSend);
}

function checkAndSend(){
    
    var nome=$("#nome").val(); 
    var cognome=$("#cognome").val(); 
    var matricola=$("#matricola").val();
    var okay=true;
    
    if(nome == ""){
        errore("nome");
        okay=false;
    }
    else
        pulisci("nome");
    
    if(cognome == ""){
        errore("cognome");
        okay=false;
    }
    else
        pulisci("cognome");
    
    if(matricola == "" || matricola < 0){
        errore("matricola");
        okay=false;
    }
    else
        pulisci("matricola");
    if(okay){
        console.log("Entro");
        st=new studente(nome,cognome,matricola);
        st.stampa();
    }    
}

function errore(campo){
    if(!document.querySelector("#errore"+campo)){
        var err=$("<h3></h3>").text("Campo non valido");
        err.attr("id","errore"+campo);
        err.addClass("errore");
        $("#"+campo).after(err);
    }
}

function pulisci(campo){
    $("#errore"+campo).remove();
}