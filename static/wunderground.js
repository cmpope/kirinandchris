$(document).ready(function($) {
  $.ajax({
    url : "http://api.wunderground.com/api/9bc20006a2cb29c6/geolookup/conditions/q/CA/Carmel_Valley.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var icon = parsed_json['current_observation']['icon_url'];
      $('#theWeather').html(temp_f + "°");
      $('#wicon').attr('src', icon);
      $('#wdesc').html(parsed_json['current_observation']['icon']);
    }
  });

  $.ajax({
    url : "http://api.wunderground.com/api/9bc20006a2cb29c6/planner_10101020/q/CA/Carmel_Valley.json",
    dataType : "jsonp",
    success : function(parsed_json1) {
      var temp_hi = parsed_json1['trip']['temp_high']['avg']['F'];
      var temp_lo = parsed_json1['trip']['temp_low']['avg']['F'];
      $('#temp_hi').html(" " + temp_hi);
      $('#temp_lo').html(" " + temp_lo);
    }
  });
});