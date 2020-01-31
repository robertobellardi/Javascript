var check=false;
window.onload = function () {
    $("#counter").text(140);
    $("#twitterarea").on('change keyup paste',eventOnTextarea);
    $("#addList").on('click',createList);
    $("#addElementInList").on('click',addElementToList);
}

function eventOnTextarea(){
    var currentVal = $(this).val();

    if(140 - currentVal.length >= 0){
        $("#counter").text(140 - currentVal.length);
        console.log(140 - currentVal.length);
    }
    else{
        $("#twitterarea").val(currentVal.substr(0,140));
    }        
}

function createList(){
    var name =  $("#inputNameList").val();
    
    $("#list").append($("<ul id='newList' class='titleList'>"+name+"</ul>"));
    $("#addList").off("click");
}

function addElementToList(){
    var ele =  $("#inputElementList").val();
    
    $("#newList").append($("<li class='elementList'>"+ele+"<img class='deleteIcon' src='baseline_clear_black_18dp.png' alt='icon_delete.png'></li>"));
    $("#inputElementList").val("");
    $("#newList li:last-child img").on("click",deleteIcon);
}

function deleteIcon(){
    $(this).parent().addClass("deleteElementList");
    $(this).off("click");
    console.log("click");
}