window.onload = function () {
        //Local Storage ---> rimane salvato in locale anche una volta che il browser viene chiuso
        if (Modernizr.localstorage) {
            var txtUser = $("#user");
            var txtPass = $("#pass");

            txtUser.on("input", function () {
                localStorage.setItem("user", $("#user").val());
            });

            txtPass.on("input", function () {
                localStorage.setItem("pass", $("#pass").val());
            });

        }
    
// Prova file JSON
    
    var text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
    var obj = JSON.parse(text);
    console.log(obj);
    for (x in obj) {
        console.log(x);
        for (y in obj[x]) {
            console.log(y);
            console.log(obj[x][y]["firstName"]+" --- " + obj[x][y]["lastName"]);
            
            /*Altro modo per accedere ai campi*/
            console.log(obj[x][y].firstName+" --- " + obj[x][y].lastName);

        }
    }



    //Local Storage ---> rimane salvato nella sessione finché il browser non viene chiuso

    if (Modernizr.sessionstorage) {
        var txtUser = $("#user");
        var txtPass = $("#pass");

        txtUser.on("input", function () {
            sessionStorage.setItem("user", $("#user").val());
        });

        txtPass.on("input", function () {
            sessionStorage.setItem("pass", $("#pass").val());
        });

    }

    if (isSupportato())
        console.log("Local e Session supportate");

    $("#validate").click(validateInput);

}

function validateInput() {
    console.log("Entro");
    $("#applicationValidate").validate({
        rules: {
            login: {
                required: true
            },

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 10
            }
        },
        messages: {
            login: "devi inserire lo user",
            email: {
                required: "inserisci una password",
                email: "rispetta il formato mail"
            },
            password: {
                required: "inserisci la password",
                minlength: "paassword corta",
                maxlength: "paassword lunga"
            }
        },
        submitHandler: function (form) {
            $("#validate").submit();
        }
    });
}


function isSupportato() {
    try {
        localStorage.setItem("1", "ciao");
        sessionStorage.setItem("1", "ciao");
        return true;
    } catch (errore) {
        return false;
    }
}
