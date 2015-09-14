$(document).ready(function() {
  console.log('jquery is ready!');

  var theMemories = $('.col-sm-3').click(function(){
    console.log(this);
    var newBanner = this;
    console.log(typeof(this));
    $('.col-md-8').html(newBanner);
  });

});