$(document).ready(function() {
  $('#confirm-address a').click(function(){
    $.ajax({
      type: 'POST',
      url: '/api/confirm-address/' + $(this).text()
    });
  });
});
