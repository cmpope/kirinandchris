$(document).ready(function() {
  $('#sporting-events').hide();
  $('#vacations').hide();
  $('#weddings').hide();

  $('#tasting-beer-thumb').click(function(){
    $('#tasting-beer').show();
    $('#sporting-events').hide();
    $('#vacations').hide();
    $('#weddings').hide();
  });

  $('#sporting-events-thumb').click(function(){
    $('#tasting-beer').hide();
    $('#sporting-events').show();
    $('#vacations').hide();
    $('#weddings').hide();
  });

  $('#vacations-thumb').click(function(){
    $('#tasting-beer').hide();
    $('#sporting-events').hide();
    $('#vacations').show();
    $('#weddings').hide();
  });

  $('#weddings-thumb').click(function(){
    $('#tasting-beer').hide();
    $('#sporting-events').hide();
    $('#vacations').hide();
    $('#weddings').show();
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


  function updateHighlight(name) {
    console.log(name);
    $('#highlight-image').attr('src', Memories[name][1]['content'][0].image);
    $('.highlight-thumbs img:nth-child(1)').attr('src', Memories[name][1]['content'][0].image);
    $('.highlight-thumbs img:nth-child(2)').attr('src', Memories[name][1]['content'][1].image);
    $('.highlight-thumbs img:nth-child(3)').attr('src', Memories[name][1]['content'][2].image);
    $('.col-md-4 h3:first-child').html(Memories[name][0]['meta'].title);
    $('.col-md-4 p').html(Memories[name][0]['meta'].description);
    $('#first-description').html(Memories[name][1]['content'][0].title);
    $('#second-description').html(Memories[name][1]['content'][0].date);
    console.log(Memories[name][0]['meta'].description);

/*
    var myTimer = setInterval(rotateImage(name), 5000);

    var i = 1;

    function rotateImage(name) {  
      console.log(i);
      if (i == 0) {
        $('#highlight-image').attr('src', Memories[name][1]['content'][0].image);
        i += 1;
      } else if (i == 1) {
        $('#highlight-image').attr('src', Memories[name][1]['content'][1].image);
        i += 1;
      } else {
        $('#highlight-image').attr('src', Memories[name][1]['content'][2].image);
        i -= 2;
      }
    }
*/
/*
    $('.highlight-thumbs img').click(function(){
      var item = $('.highlight-thumbs img').index(this);
      console.log(item);
      $('#highlight-image').attr('src', Memories[name][1]['content'][item].image);
      $('.highlight-thumbs img:focus').attr('background-color', "#00");
    });


  };


  $('.col-sm-3').click(function(){
    var name = $('.col-sm-3').index(this);
    updateHighlight(name);
  });

  $('.highlight-thumbs img').click(function(){
    var item = $('.highlight-thumbs img').index(this);
    console.log(item);
    $('#highlight-image').attr('src', Memories[0][1]['content'][item].image)
  });
*/


});