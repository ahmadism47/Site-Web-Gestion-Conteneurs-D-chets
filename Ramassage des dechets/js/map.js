// Initialize and add the map
function initMap() {
    // The location of your map (example: New York)
    var myLatLng = {lat: 48.36108496197075, lng: -4.566589167115018};
    
    // Create the map with your options
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });
    
    // Create a marker and set its position
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}
