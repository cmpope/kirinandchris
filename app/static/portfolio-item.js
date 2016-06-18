$(document).ready(function() {

  var thumbs = $('.highlight-thumbs img');
  var allThumbDescriptions = $('.image-description .thumb-description');

  function imageTracker() {
    var shownImage = 0;

    $('.other-memories').click(function(){
      var otherMemoriesCount = $('.other-memories').index(this);
      if (otherMemoriesCount == 0) {
        shownImage = 0;
      } else if (otherMemoriesCount == 1) {
        shownImage = 3;
      } else if (otherMemoriesCount == 2) {
        shownImage = 6;
      } else if (otherMemoriesCount == 3) {
        shownImage = 9
      } else if (otherMemoriesCount == 4) {
        shownImage = 12;
      } else if (otherMemoriesCount == 5) {
        shownImage = 15;
      } else if (otherMemoriesCount == 6) {
        shownImage = 18;
      }
      return shownImage;
    });

    $('.highlight-thumbs img').click(function(){
      shownImage = $('.highlight-thumbs img').index(this);
      nextPicture(shownImage);
      return shownImage;
    });

    $('body').keydown(function(e){
      if (e.keyCode == 39) {
        switch(shownImage) {
          case 0:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 1:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 2:
            showTastingBeer();

          case 3:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 4:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 5:
            showSportingEvents();

          case 6:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 7:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 8:
            showWeddings();

          case 9:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 10:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 11:
            showPebbleBeach();

          case 12:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 13:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 14:
            showLmu();

          case 15: 
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 16:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 17:
            showFamily();

          case 18:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 19:
            shownImage += 1;
            nextPicture(shownImage);
            break;

          case 20:
            showVacations();
            shownImage -=20;
        }
      }

      if (e.keyCode == 37) {
       switch(shownImage) {
          case 0:
            shownImage += 21;
            showFamily();


          case 1:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 2:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 3:
            showVacations();

          case 4:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 5:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 6:
            showTastingBeer();

          case 7:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 8:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 9:
            showSportingEvents();

          case 10:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 11:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 12:
            showWeddings();

          case 13:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 14:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 15: 
            showPebbleBeach();

          case 16:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 17:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 18:
            showLmu();

          case 19:
            shownImage -= 1;
            nextPicture(shownImage);
            break;

          case 20:
            shownImage -= 1;
            nextPicture(shownImage);
            break;
  
        }
      }
    });

  }

  function nextPicture(shownImage) {
    $('.highlight-thumbs img').removeClass('highlight-thumbs-click');
    var descriptions = $('.image-description .thumb-description');
    $(descriptions).hide();
    var description = descriptions[shownImage];
    $(description).show();
    $(thumbs[shownImage]).addClass('highlight-thumbs-click');
    var imgSrc = $(thumbs[shownImage]).attr('src');
    $('.highlight-image').attr('src', imgSrc);
  }

  function previousPicture(shownImage) {
    var imgSrc = $(thumbs[shownImage]).attr('src');
    $('.highlight-image').attr('src', imgSrc);
  }


  $('#tasting-beer-thumb').click(function(){
    showTastingBeer();
  });

  function showTastingBeer() {
      $('#sporting-events').hide();
      $('#vacations').hide();
      $('#weddings').hide();
      $('#pebble-beach').hide();
      $('#lmu').hide();
      $('#family').hide();
      var highlightImageSrc = $(thumbs[3]).attr('src');
      $('.highlight-image').attr('src', highlightImageSrc);
      $(thumbs).removeClass('highlight-thumbs-click');
      $(thumbs[3]).addClass('highlight-thumbs-click');
      $('#tasting-beer').show();
      $(allThumbDescriptions[3]).show();
  }

  $('#sporting-events-thumb').click(function(){
    showSportingEvents();
  });

  function showSportingEvents() {
      $('#tasting-beer').hide();
      $('#vacations').hide();
      $('#weddings').hide();
      $('#pebble-beach').hide();
      $('#lmu').hide();
      $('#family').hide();
      var highlightImageSrc = $(thumbs[6]).attr('src');
      $('.highlight-image').attr('src', highlightImageSrc);
      $(thumbs).removeClass('highlight-thumbs-click');
      $(thumbs[6]).addClass('highlight-thumbs-click');
      $('#sporting-events').show();
      $(allThumbDescriptions[6]).show();
  }


  $('#vacations-thumb').click(function(){
    showVacations();
  });

  function showVacations() {
      $('#tasting-beer').hide();
      $('#sporting-events').hide();
      $('#weddings').hide();
      $('#pebble-beach').hide();
      $('#lmu').hide();
      $('#family').hide();
      var highlightImageSrc = $(thumbs[0]).attr('src');
      $('.highlight-image').attr('src', highlightImageSrc);
      $(thumbs).removeClass('highlight-thumbs-click');
      $(thumbs[0]).addClass('highlight-thumbs-click');
      $('#vacations').show();
      $(allThumbDescriptions[0]).show();
  }



  $('#weddings-thumb').click(function(){
    showWeddings();
  });

  function showWeddings() {
      $('#tasting-beer').hide();
      $('#sporting-events').hide();
      $('#vacations').hide();
      $('#pebble-beach').hide();
      $('#lmu').hide();
      $('#family').hide();
      var highlightImageSrc = $(thumbs[9]).attr('src');
      $('.highlight-image').attr('src', highlightImageSrc);
      $(thumbs).removeClass('highlight-thumbs-click');
      $(thumbs[9]).addClass('highlight-thumbs-click');
      $('#weddings').show();
      $(allThumbDescriptions[9]).show();
  }


  $('#pebble-beach-thumb').click(function(){
    showPebbleBeach();
  });

  function showPebbleBeach() {
      $('#tasting-beer').hide();
      $('#sporting-events').hide();
      $('#vacations').hide();
      $('#weddings').hide();
      $('#lmu').hide();
      $('#family').hide();
      var highlightImageSrc = $(thumbs[12]).attr('src');
      $('.highlight-image').attr('src', highlightImageSrc);
      $(thumbs).removeClass('highlight-thumbs-click');
      $(thumbs[12]).addClass('highlight-thumbs-click');
      $('#pebble-beach').show();
      $(allThumbDescriptions[12]).show();
  }


  $('#lmu-thumb').click(function(){
    showLmu();
  });

  function showLmu() {
    $('#tasting-beer').hide();
    $('#sporting-events').hide();
    $('#vacations').hide();
    $('#weddings').hide();
    $('#pebble-beach').hide();
    $('#family').hide();
    var highlightImageSrc = $(thumbs[15]).attr('src');
    $('.highlight-image').attr('src', highlightImageSrc);
    $(thumbs).removeClass('highlight-thumbs-click');
    $(thumbs[15]).addClass('highlight-thumbs-click');
    $('#lmu').show();
    $(allThumbDescriptions[15]).show();
  }


  $('#family-thumb').click(function(){
    showFamily();
  });

  function showFamily() {
      $('#tasting-beer').hide();
      $('#sporting-events').hide();
      $('#vacations').hide();
      $('#weddings').hide();
      $('#pebble-beach').hide();
      $('#lmu').hide();
      var highlightImageSrc = $(thumbs[18]).attr('src');
      $('.highlight-image').attr('src', highlightImageSrc);
      $(thumbs).removeClass('highlight-thumbs-click');
      $(thumbs[18]).addClass('highlight-thumbs-click');
      $('#family').show();
      $(allThumbDescriptions[18]).show();
  }


  $('#sporting-events').hide();
  $('#tasting-beer').hide();
  $('#weddings').hide();
  $('#pebble-beach').hide();
  $('#lmu').hide();
  $('#family').hide();
  $('.second-description-title').hide();
  $('.second-description-date').hide();
  $('.third-description-title').hide();
  $('.third-description-date').hide();
  $('.image-description .thumb-description').hide();
  $('.image-description .thumb-description').first().show();

  imageTracker();
});