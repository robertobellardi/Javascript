var mymap;

window.onload = function () { 
    
    mymap=L.map('mapid');   
    
    createMap();
    
    getCoordinate();
    
    setInterval(getCoordinate,5000);

}

function createMap() {     

    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];

        mymap.setView([lat,lon], 3);
        
    });
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11'
    }).addTo(mymap);
}

function getCoordinate(){    
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function (data) {
        var myIcon = L.icon({
            iconUrl: 'Orbital_Station-512.png',
            iconSize: [50, 50],
            iconAnchor: [0, 0],
            popupAnchor: [0, 0],
            shadowUrl: '',
            shadowSize: [,],
            shadowAnchor: [,]
        });
        L.marker([data['iss_position']['latitude'], data['iss_position']['longitude']], {
            icon: myIcon
        }).addTo(mymap);
        $("#coordinate").text(data['iss_position']['latitude']+" --- "+data['iss_position']['longitude']);
        getFutureCoordinate(data['iss_position']['latitude'], data['iss_position']['longitude']);
        console.log("Stampo");
    });
}

function getFutureCoordinate(lat,lon){  
    
     $.getJSON("https://www.n2yo.com/rest/v1/satellite/positions/25544/45.05/7.40/0/100/&apiKey=7DLJ49-FZ4E67-BB5GWE-4AU4", function(data) {
        console.log(data["positions"][99]);
         
         var lati=data["positions"][99]["satlatitude"];
         var longi=data["positions"][99]["satlongitude"];
         
         var myIcon = L.icon({
            iconUrl: 'satFut.png',
            iconSize: [50, 50],
            iconAnchor: [0, 0],
            popupAnchor: [0, 0],
            shadowUrl: '',
            shadowSize: [,],
            shadowAnchor: [,]
        });
        L.marker([lati,longi], {
            icon: myIcon
        }).addTo(mymap);
        $("#coordinatefuture").text(lati+" --- "+longi);     
         

    });
}
