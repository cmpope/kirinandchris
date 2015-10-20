var locations = [
  {
    "name" : "Holman Ranch",
    "coordinates" : {lat: 36.479902, lng: -121.7284547},
    "icon" : "static/star-icon.png",
    "infowindow" : "<a target='_blank' href='http://www.holmanranch.com'>Holman Ranch</a>"
  },
  {
    "name" : "Bernardus",
    "coordinates" : {lat: 36.5011328, lng: -121.755646},
    "infowindow" : "<a target='_blank' href='http://www.bernarduslodge.com'>Bernardus Lodge & Spa</a>"
  },
  {
    "name" : "Quail Lodge", 
    "coordinates" : {lat:36.5322579, lng: -121.8591667},
    "infowindow" : "<a target='_blank' href='http://www.quaillodge.com'>Quail Lodge & Golf Club</a>"
  },
  {
    "name" : "Carmel Valley Ranch",
    "coordinates" : {lat: 36.5175605, lng: -121.8014857},
    "infowindow" : "<a target='_blank' href='http://www.carmelvalleyranch.com'>Carmel Valley Ranch</a>"
  },
  {
    "name" : "Hyatt Regency Monterey",
    "coordinates" : {lat: 36.5927144, lng: -121.8779099},
    "infowindow" : "<a target='_blank' href='https://aws.passkey.com/event/14276473/owner/4475/home'>Hyatt Regency Monterey</a>"
  },
  {
    "name" : "Carmel Valley Lodge",
    "coordinates" : {lat: 36.484192, lng: -121.7393141},
    "infowindow" : "<a target='_blank' href='http://www.valleylodge.com'>Carmel Valley Lodge</a>"
  },
  {
    "name" : "Los Laureles",
    "coordinates" : {lat: 36.494394, lng: -121.7483371},
    "infowindow" : "<a target='_blank' href='http://www.loslaureles.com'>Los Laureles</a>"
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
      label: locations[i].name,
      title: locations[i].name,
      map: map,
      icon : locations[i].icon
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].infowindow);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

google.maps.event.addDomListener(window, 'load', initMap);



