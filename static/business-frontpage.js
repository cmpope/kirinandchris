var locations = [
  {
    "name" : "Holman Ranch",
    "coordinates" : {lat: 36.479902, lng: -121.7284547}
  },
  {
    "name" : "Bernardus",
    "coordinates" : {lat: 36.5011328, lng: -121.755646}
  },
  {
    "name" : "Quail Lodge", 
    "coordinates" : {lat:36.5322579, lng: -121.8591667}
  },
  {
    "name" : "Carmel Valley Ranch",
    "coordinates" : {lat: 36.5175605, lng: -121.8014857}
  },
  {
    "name" : "Hyatt Regency Monterey",
    "coordinates" : {lat: 36.5927144, lng: -121.8779099}
  },
  {
    "name" : "Carmel Valley Lodge",
    "coordinates" : {lat: 36.484192, lng: -121.7393141}
  },
  {
    "name" : "Los Laureles",
    "coordinates" : {lat: 36.494394, lng: -121.7483371}
  }
]

var map;
var markers = [];

function initMap() {
  // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.555154, lng:-121.826674},
    scrollwheel: false,
    zoom: 11,
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: locations[i].coordinates,
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

google.maps.event.addDomListener(window, 'load', initMap);



