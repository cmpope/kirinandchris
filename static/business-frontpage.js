function initMap() {
  var holmanRanch = {lat: 36.479902, lng: -121.7284547};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: holmanRanch,
    scrollwheel: false,
    zoom: 10
  });

  // Create a marker and set its position.
  var holmanRanchMarker = new google.maps.Marker({
    map: map,
    position: holmanRanch,
    title: 'Holman Ranch'
  });

  var bernardusMarker = new google.maps.Marker({
    map: map,
    position: {lat: 36.5011328, lng: -121.755646},
    title: 'Bernardus Lodge & Spa'
  });

}
google.maps.event.addDomListener(window, 'load', initMap);