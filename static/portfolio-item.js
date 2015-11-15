$(document).ready(function() {

  var thumbs = $('.highlight-thumbs img');
  var allThumbDescriptions = $('.image-description .thumb-description');
  
  $('.highlight-thumbs img').click(function(){
    $('.highlight-thumbs img').removeClass('highlight-thumbs-click');
    var descriptions = $('.image-description .thumb-description');
    $(descriptions).hide();
    var item = $('.highlight-thumbs img').index(this);
    var description = descriptions[item];
    $(this).addClass('highlight-thumbs-click');
    var imgSrc = $(thumbs[item]).attr('src');
    $('.highlight-image').attr('src', imgSrc);
    $(description).show();
  });

  /*
  //keyCode JS to detect right/left arrow push and move image
  $('body').keydown(function(e){
    if (e.keyCode == 39) {
      if thumbs.style('display', 'none')

    }
  });

  //end keyCode JS
  */

  $('#sporting-events').hide();
  $('#vacations').hide();
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

  $('#tasting-beer-thumb').click(function(){
    $('#sporting-events').hide();
    $('#vacations').hide();
    $('#weddings').hide();
    $('#pebble-beach').hide();
    $('#lmu').hide();
    $('#family').hide();
    var highlightImageSrc = $(thumbs[0]).attr('src');
    $('.highlight-image').attr('src', highlightImageSrc);
    $(thumbs).removeClass('highlight-thumbs-click');
    $(thumbs[0]).addClass('highlight-thumbs-click');
    $('#tasting-beer').show();
    $(allThumbDescriptions[0]).show();
  });

  $('#sporting-events-thumb').click(function(){
    $('#tasting-beer').hide();
    $('#vacations').hide();
    $('#weddings').hide();
    $('#pebble-beach').hide();
    $('#lmu').hide();
    $('#family').hide();
    var highlightImageSrc = $(thumbs[3]).attr('src');
    $('.highlight-image').attr('src', highlightImageSrc);
    $(thumbs).removeClass('highlight-thumbs-click');
    $(thumbs[3]).addClass('highlight-thumbs-click');
    $('#sporting-events').show();
    $(allThumbDescriptions[3]).show();
  });

  $('#vacations-thumb').click(function(){
    $('#tasting-beer').hide();
    $('#sporting-events').hide();
    $('#weddings').hide();
    $('#pebble-beach').hide();
    $('#lmu').hide();
    $('#family').hide();
    var highlightImageSrc = $(thumbs[6]).attr('src');
    $('.highlight-image').attr('src', highlightImageSrc);
    $(thumbs).removeClass('highlight-thumbs-click');
    $(thumbs[6]).addClass('highlight-thumbs-click');
    $('#vacations').show();
    $(allThumbDescriptions[6]).show();
  });

  $('#weddings-thumb').click(function(){
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
  });

  $('#pebble-beach-thumb').click(function(){
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
  });

  $('#lmu-thumb').click(function(){
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
  });

  $('#family-thumb').click(function(){
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
  });

/*
  var Memories = [

    //***TASTING BEER***
    [
      {
        "meta" : {
          "title" : "Tasting Beer",
          "description" : "Kirin and Chris share a passion for great beer. Visiting breweries is one of their favorite things to do together. Some of their California favorites include Alesmith, Sierra Nevada, Russian River and Firestone Walker."
        }
      },
      {
        "content" :
          [       
              {
                "title" : "Sierra Nevada Brewing Company",
                "image" : "static/sierra-nevada-brewery.JPG",
                "alt" : "kirin-mysorewala-chris-pope-sierra-nevada-brewery",
                "date" : "February 16, 2013 | Chico, CA"
              },
              {
                "title" : "Bear Republic Brewing Company",
                "image" : "static/bear-republic-brewery-hd.jpg",
                "alt" : "kirin-mysorewala-chris-pope-bear-republic-brewery",
                "date" : "August 18, 2013 | Healdsberg, CA"          
              },
              {
                "title" : "Firestone Walker Brewing Company",
                "image" : "static/firestone-walker-brewery-hd.JPG",
                "alt" : "kirin-mysorewala-chris-pope-firestone-walker-brewery",
                "date" : "July 28, 2013 | Paso Robles, CA"
              }
          ]
        }
    ],

    //***SPORTING EVENTS***
    [
      {
        "meta" : {
          "title" : "Sporting Events",
          "description" : "Kirin and Chris both grew up with families that are passionate about sports and they've enjoyed attending many sporting events throughout their relationship. Their favorite sports memories together include the 2013 NFC Championship in Atlanta, the final regular season game at Candlestick Park and the 2011 Cal vs. Stanford football game."
        }
      },
      {
        "content" : 
          [
            {
              "title" : "Final 49ers Game at Candlestick Park",
              "image" : "static/49er-game-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-49er-game",
              "date" : "December, 24, 2013 | San Francisco, CA"
            },
            {
              "title" : "Giants Spring Training",
              "image" : "static/giants-spring-training-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-giants-spring-training",
              "date" : "March 23, 2013 | Scottsdale, AZ"
            },
            {
              "title" : "Sharks Stadium Series Game vs LA Kings",
              "image" : "static/sharks-stadium-series-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-giants-spring-training",
              "date" : "February 21, 2015 | Santa Clara, CA"
            }
          ]
      }
    ],

    [
      {
        "meta" : {
          "title" : "Vacations",
          "description" : "We love vacations ya bish"
        }
      },
      {
        "content" :
        [
          {
            "title" : "Hawaii with Marketo - Purple Label Society",
            "image" : "static/hawaii-pls-2013.JPG",
            "alt" : "kirin-mysorewala-chris-pope-wedding-memories-hawaii",
            "date" : "February 16, 1900 | Hululailai, HI"
          },
          {
            "title" : "Hawaii with Marketo - Purple Label Society",
            "image" : "static/hawaii-pls-2013.JPG",
            "alt" : "kirin-mysorewala-chris-pope-wedding-memories-hawaii",
            "date" : "February 16, 1900 | Hululailai, HI"
          },
          {
            "title" : "Hawaii with Marketo - Purple Label Society",
            "image" : "static/hawaii-pls-2013.JPG",
            "alt" : "kirin-mysorewala-chris-pope-wedding-memories-hawaii",
            "date" : "February 16, 1900 | Hululailai, HI"
          }
        ]
      }
    ],

    //***WEDDINGS***
    [
      {
        "meta" : {
          "title" : "Weddings",
          "description" : "We love weddings ya bish"
        }
      },
      {
        "content" :
        [
          {
            "title" : "Jenny and Barry Kelly Wedding",
            "image" : "static/kirin-chris-jenny-wedding-hd.JPG",
            "alt" : "kirin-mysorewala-chris-pope-wedding-memories-jenny-barry-kelly-wedding",
            "date" : "February 16, 1900 | Berkeley, CA"
          },
           {
            "title" : "Jenny and Barry Kelly Wedding",
            "image" : "static/kirin-chris-jenny-wedding-hd.JPG",
            "alt" : "kirin-mysorewala-chris-pope-wedding-memories-jenny-barry-kelly-wedding",
            "date" : "February 16, 1900 | Berkeley, CA"
          },
          {
            "title" : "Jenny and Barry Kelly Wedding",
            "image" : "static/kirin-chris-jenny-wedding-hd.JPG",
            "alt" : "kirin-mysorewala-chris-pope-wedding-memories-jenny-barry-kelly-wedding",
            "date" : "February 16, 1900 | Berkeley, CA"
          }
        ]
      }
    ]
  ]
*/

});