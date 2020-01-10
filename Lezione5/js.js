var check=false;

window.onload = function () {
    $("#send").click(send);
    $("#checkbox").click(changeCheck) 
}

function send() {
    if(checkMail() && check)
        alert("Campi validi. Hai scelto l'abbonamento : "+$("#select").children("option:selected").val());
    else
        alert("Campi errati");
}

function checkMail(){
    var mail=$("#mail").val();
    
    if(mail != "")
        return true;
    else
        return false;
}

function changeCheck(){
    
    if(check==false)
        check=true;
    else
        check=false;
}
