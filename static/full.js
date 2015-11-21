$(document).ready(function(){

  var callTimer = setInterval(function(){rotatePics()}, 5000);

  var theCount = 0;

  function rotatePics() {
    if (theCount == 0) {
      $('.full').css({"background": "url('/static/kirin-chris-engagement-photo-field-small.jpg') no-repeat center center fixed", "-webkit-background-size" : "cover", "-moz-background-size": "cover", "background-size": "cover", "-o-background-size": "cover"});
      theCount += 1;
    } else if (theCount == 1) {
      $('.full').css({"background": "url('/static/kirin-chris-engagement-photo-bench-small.jpg') no-repeat center center fixed", "-webkit-background-size" : "cover", "-moz-background-size": "cover", "background-size": "cover", "-o-background-size": "cover"});
      theCount += 1;
    } else {
      $('.full').css({"background": "url('/static/kirin-chris-engagement-walking-forest-small.jpg') no-repeat center center fixed", "-webkit-background-size" : "cover", "-moz-background-size": "cover", "background-size": "cover", "-o-background-size": "cover"});
      theCount -= 2;
    }
   
  }

});