var hotelLocations = [
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
    "name" : "Hilton Garden Inn Monterey",
    "coordinates" : {lat: 36.5922565, lng: -121.8774177},
    "infowindow" : "<a target='_blank' href='http://www.hiltonmonterey.com/'>Hilton Garden Inn Monterey</a>"
  },
  {
    "name" : "Los Laureles",
    "coordinates" : {lat: 36.494394, lng: -121.7483371},
    "infowindow" : "<a target='_blank' href='http://www.loslaureles.com'>Los Laureles</a>"
  },
  {
    "name" : "Blue Sky Lodge",
    "coordinates" : {lat: 36.478472, lng: -121.729574},
    "infowindow" : "<a target='_blank' href='http://reservation.worldweb.com/Bookings-nr105/activity-edit.html?table=hotels&listing_id=1524&mode=command&command=bookingrequestform&hotel_id=1524&package_id=106816&date_from=20161014&date_to=20161016'>Blue Sky Lodge</a>"
  },
  {
    "name" : "Carmel Valley Lodge",
    "coordinates" : {lat: 36.483929, lng: -121.738865},
    "infowindow" : "<a target='_blank' href='http://www.valleylodge.com/'>Carmel Valley Lodge</a>"
  }
]

var map;
var markers = [];

function initHotelMap() {
  // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('hotel-map'), {
    center: {lat: 36.555154, lng:-121.826674},
    scrollwheel: false,
    zoom: 11,
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < hotelLocations.length; i++) {
    marker = new google.maps.Marker({
      position: hotelLocations[i].coordinates,
      label: hotelLocations[i].name,
      title: hotelLocations[i].name,
      map: map,
      icon : hotelLocations[i].icon
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(hotelLocations[i].infowindow);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

google.maps.event.addDomListener(window, 'load', initHotelMap);




