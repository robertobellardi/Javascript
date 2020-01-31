window.onload = function () {
    richiestaAjax();

}

function richiestaAjax() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            parseData(data);
        }
    });
}

function parseData(data) {

    for (y in data["results"]) {
        for (t in data["results"][y]) {
            $("#stampaJson").append("<h6>" + t + "</h6>");
            if (t === "gender") {
                $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["gender"] + "</h6>");
            } else if (t === "name") {
                for (h in data["results"][y]["name"])
                    $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["name"][h] + "</h6>");

            } else if (t === "location") {
                for (h in data["results"][y]["location"]) {
                    if (h === "street") {
                        $("#stampaJson").append("<h6>" + h + "</h6>");
                        for (r in data["results"][y]["location"][h])
                            $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["location"][h][r] + "</h6>");

                    } else if (h === "coordinates") {
                        $("#stampaJson").append("<h6>" + h + "</h6>");
                        for (r in data["results"][y]["location"][h])
                            $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["location"][h][r] + "</h6>");

                    } else if (h === "timezone") {
                        $("#stampaJson").append("<h6>" + h + "</h6>");
                        for (r in data["results"][y]["location"][h])
                            $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["location"][h][r] + "</h6>");
                    }
                }
            } else if (t === "email") {
                $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["email"] + "</h6>");
            } else if (t === "login") {
                for (h in data["results"][y]["login"])
                    $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["login"][h] + "</h6>");

            } else if (t === "dob") {
                for (h in data["results"][y]["dob"])
                    $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["dob"][h] + "</h6>");

            } else if (t === "registered") {
                for (h in data["results"][y]["registered"])
                    $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["registered"][h] + "</h6>");

            } else if (t === "phone") {
                $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["phone"] + "</h6>");

            } else if (t === "cell") {
                $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["cell"] + "</h6>");

            } else if (t === "id") {
                for (h in data["results"][y]["id"])
                    $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["id"][h] + "</h6>");

            } else if (t === "picture") {
                for (h in data["results"][y]["picture"])
                    $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["picture"][h] + "</h6>");

            } else if (t === "nat") {
                $("#stampaJson").append("<h6 class='red'>" + data["results"][y]["nat"] + "</h6>");
            }
        }
    }
}
