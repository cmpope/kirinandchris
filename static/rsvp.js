$(document).ready(function() {
  console.log('rsvp.js ready');
  $('#confirm-address').click(function(){
    $.ajax({
      type: 'POST',
      url: '/api/confirm-address',
      data: $(this).text()
    });
    console.log('Clicked ' + $(this).text());
  });

  $('.mdl-switch').click(function(){
    id = $(this).attr('for');
    check = ($('#' + id).val());
    if(check == 'on') {
      console.log('They are attending');
    }
    u = $(this).attr('for');
    console.log(u);
  });
});
