$(document).ready(function(){
  
  console.log('jquery is ready!');

  var callTimer = setInterval(function(){rotatePics()}, 5000);

  var theCount = 0;

  function rotatePics() {
    
    console.log('the Count is:', theCount);
    if (theCount == 0) {
      $('.full').css({"background": "url('/static/engagement-near-water.JPG') no-repeat center center fixed", "-webkit-background-size" : "cover", "-moz-background-size": "cover", "background-size": "cover", "-o-background-size": "cover"});
      theCount += 1;

    } else {
      $('.full').css({"background": "url('/static/kirin-chris-overlooking-vineyard.JPG') no-repeat center center fixed", "-webkit-background-size" : "cover", "-moz-background-size": "cover", "background-size": "cover", "-o-background-size": "cover"});
      theCount -= 1;
    }
   
  }

  rotate();
});