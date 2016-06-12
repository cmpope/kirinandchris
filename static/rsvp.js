$(document).ready(function() {
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
    }
    u = $(this).attr('for');
  });

  $('#submitInfo').click(function(){
    submitGuest();
  });


  function submitGuest() {
    var guestArray = []
    $('tbody tr').each(function(index) {
      var guestData = {}
      var gid = this.getAttribute('gid');
      guestData['gid'] = gid;
      var attendingSelector = '[gid="' + gid + '\"] [gfield="attending"]';
      var attendingUpdate = $(attendingSelector).val(); 
      guestData['attending'] = attendingUpdate;
      var dietarySelector = '[gid="' + gid + '\"] [gfield="dietary_restrictions"]';
      var dietaryUpdate = $(dietarySelector).val();
      guestData['dietary_restrictions'] = dietaryUpdate;
      guestArray.push(guestData);
    });
    console.log(guestArray);
    $.ajax({
      method : "POST",
      url : '/rsvp/update',
      data : JSON.stringify(guestArray),
      contentType : "application/json"
    }).done(function(){
      console.log('done');
    });
  }

  function submitParty() {

  }

});
