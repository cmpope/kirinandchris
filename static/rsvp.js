$(document).ready(function() {
  $('#confirm-address').click(function(){
    $.ajax({
      type: 'POST',
      url: '/api/confirm-address'
    });
  });
});
