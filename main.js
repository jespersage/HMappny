$( document ).on( "pageinit", "#skolrundan", function() {
var skolmap;

function Skolrundan() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(59.45094, 17.90243),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    skolmap = new google.maps.Map(document.getElementById('skolrundan-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.45141, 17.90321),
        map: skolmap,
        icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 2
        }
    });
}
google.maps.event.addDomListener(window, 'load', Skolrundan);
});
$( document ).on( "pageinit", "#vibyeljusspar", function() {
var vibymap;

function Vibyeljusspar() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(59.45094, 17.90243),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    vibymap = new google.maps.Map(document.getElementById('vibyeljusspar-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.45141, 17.90321),
        map: vibymap,
        icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 2
        }
    });
}
google.maps.event.addDomListener(window, 'load', Vibyeljusspar);
});
$( document ).on( "pageinit", "#arstarundan", function() {
var arstamap;

function Arstarundan() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(59.45094, 17.90243),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    arstamap = new google.maps.Map(document.getElementById('arstarundan-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.45141, 17.90321),
        map: arstamap,
        icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 2
        }
    });
}
google.maps.event.addDomListener(window, 'load', Arstarundan);
});
