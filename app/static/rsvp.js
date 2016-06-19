$(document).ready(function() {
  $('#confirm-address').click(function(){
    var address = $(this).text();
    $('#address').val(address);
    $('#addressLookup').submit();
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
    submitParty();
  });


  function submitGuest() {
    var guestArray = []
    $('tbody tr').each(function(index) {
      var guestData = {}
      var gid = this.getAttribute('gid');
      guestData['gid'] = gid;
      var emailSelector = '[gid="' + gid + '\"] [gfield="email"]';
      var emailUpdate = $(emailSelector).val();
      console.log('emailUpdate :', emailUpdate);
      guestData['email'] = emailUpdate;
      var attendingSelector = '[gid="' + gid + '\"] [gfield="attending"]';
      var attendingUpdate = $(attendingSelector).is(":checked"); 
      guestData['attending'] = attendingUpdate;
      var dietarySelector = '[gid="' + gid + '\"] [gfield="dietary_restrictions"]';
      var dietaryUpdate = $(dietarySelector).val();
      guestData['dietary_restrictions'] = dietaryUpdate;
      guestArray.push(guestData);
    });
    $.ajax({
      method : "POST",
      url : '/rsvp/update/guest',
      data : JSON.stringify(guestArray),
      contentType : "application/json"
    });
  }

  function submitParty() {
    var partyData = {}
    var p = $('[pfield="accommodations"]');
    pid = p.attr('pid');
    var accommodationsUpdate = p.val();
    partyData['pid'] = pid;
    partyData['accommodations'] = accommodationsUpdate;
    $.ajax({
      method : "POST",
      url : '/rsvp/update/party',
      data : JSON.stringify(partyData),
      contentType : "application/json"
    }).done(function(){
      window.location = "/rsvp/confirmation";
    });
  }

});
