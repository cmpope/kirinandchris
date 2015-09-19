$(document).ready(function() {

  var Memories = {
    "tastingBeer" : {
      "summary" : "lorem ipsum",
      "content" : {
          "sierraNevadaBrewery" : {
            "image" : {
              "source" : "static/sierra-nevada-brewery.JPG",
              "alt" : "kirin-mysorewala-chris-pope-sierra-nevada-brewery"
            },
            "description" : {
              "name" : "Sierra Nevada Brewing Company",
              "date" : "February 16, 2013 | Chico, CA"
            }
          },
          "bearRepublicBrewery" : {
            "image" : {
              "src" : "static/bear-republic-brewery-hd.jpg",
              "alt" : "kirin-mysorewala-chris-pope-bear-republic-brewery"
            },
            "description" : {
              "name" : "Bear Republic Brewing Company",
              "date" : "August 18, 2013 | Healdsberg, CA"
            } 
          },
          "firestoneWalkerBrewery" : {
            "image" : {
              "source" : "static/firestone-walker-brewery-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-firestone-walker-brewery"
            },
            "description" : {
              "name" : "Firestone Walker Brewing Company",
              "date" : "July 28, 2013 | San Louis Obispo, CA"
            }
          }
        }
      },

    "sportingEvents" : {
      "summary" : "lorem ipsum",
      "content" : {
          "ninerGame" : {
            "image" : {
              "source" : "static/49er-game-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-49er-game"
            },
            "description" : {
              "name" : "Final Game at Candlestick Park",
              "date" : "February 16, 1900 | San Francisco, CA"
            }
          },
          "giantsSpringTraining" : {
            "image" : {
              "source" : "static/giants-spring-training-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-giants-spring-training"
            },
            "description" : {
              "name" : "Giants Spring Training",
              "date" : "August 18, 1900 | Phoenix, AZ"
            } 
          },
          "sharksStadiumSeries" : {
            "image" : {
              "source" : "static/sharks-stadium-series-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-sharks-stadium-series"
            },
            "description" : {
              "name" : "San Jose Sharks Stadium Series Game vs. LA Kings",
              "date" : "July 28, 1900 | Santa Clara, CA"
            }
          }
        }
      },

    "vacations" : {
      "summary" : "lorem ipsum",
      "content" : {
          "hawaii" : {
            "image" : {
              "source" : "hawaii-pls-2013.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-hawaii"
            },
            "description" : {
              "name" : "Hawaii with Marketo - Purple Label Society",
              "date" : "February 16, 1900 | Hululailai, HI"
            }
          },
          "giants-spring-training" : {
            "image" : {
              "source" : "giants-spring-training-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-giants-spring-training"
            },
            "description" : {
              "name" : "Giants Spring Training",
              "date" : "August 18, 1900 | Phoenix, AZ"
            } 
          },
          "sharks-stadium-series" : {
            "image" : {
              "source" : "sharks-stadium-series-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-sharks-stadium-series"
            },
            "description" : {
              "name" : "San Jose Sharks Stadium Series Game vs. LA Kings",
              "date" : "July 28, 1900 | Santa Clara, CA"
            }
          }
        }
      },

    "weddings" : {
      "summary" : "lorem ipsum",
      "conent" : {
          "jenny-jamal" : {
            "image" : {
              "source" : "kirin-chris-jenny-wedding-hd.jpg",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-jenny-jamal-wedding"
            },
            "description" : {
              "name" : "",
              "date" : "February 16, 1900 | Hululailai, HI"
            }
          },
          "giants-spring-training" : {
            "image" : {
              "source" : "giants-spring-training-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-giants-spring-training"
            },
            "description" : {
              "name" : "Giants Spring Training",
              "date" : "August 18, 1900 | Phoenix, AZ"
            } 
          },
          "sharks-stadium-series" : {
            "image" : {
              "source" : "sharks-stadium-series-hd.JPG",
              "alt" : "kirin-mysorewala-chris-pope-wedding-memories-sharks-stadium-series"
            },
            "description" : {
              "name" : "San Jose Sharks Stadium Series Game vs. LA Kings",
              "date" : "July 28, 1900 | Santa Clara, CA"
            }
          }
        }
      }

  };

  $('#tastingBeer').click(function(){
    $('#highlight-image').attr('src', Memories.tastingBeer.content.sierraNevadaBrewery.image.source);
    $('.highlight-thumbs img:nth-child(1)').attr('src', Memories.tastingBeer.content.sierraNevadaBrewery.image.source);
    $('.highlight-thumbs img:nth-child(1)').css('background-color', '#000');
    $('.highlight-thumbs img:nth-child(2)').attr('src', Memories.tastingBeer.content.bearRepublicBrewery.image.source);
    $('.highlight-thumbs img:nth-child(3)').attr('src', Memories.tastingBeer.content.firestoneWalkerBrewery.image.source);

    var callTimer = setInterval(function(){rotatePics()}, 4500);

    $('#sportingEvents, #vacations, weddings').click(function(){clearInterval(callTimer)});

    var theCount = 1;

    function rotatePics() {
      if (theCount == 0) {
        $('.highlight-thumbs img:nth-child(1)').click(function(){clearInterval(callTimer)});
        $('#highlight-image').attr('src', Memories.tastingBeer.content.sierraNevadaBrewery.image.source);
        $('.highlight-thumbs img:nth-child(3)').css('background-color', '#fff');
        $('.highlight-thumbs img:nth-child(1)').css('background-color', '#000');
        theCount += 1;

      } else if (theCount == 1) {
        $('.highlight-thumbs img:nth-child(2)').click(function(){clearInterval(callTimer)});
        $('#highlight-image').attr('src', Memories.tastingBeer.content.bearRepublicBrewery.image.source);
        console.log($('#highlight-image'));
        $('.highlight-thumbs img:nth-child(1)').css('background-color', '#fff');
        $('.highlight-thumbs img:nth-child(2)').css('background-color', '#000');
        theCount += 1;
      } else {
        $('.highlight-thumbs img:nth-child(3)').click(function(){clearInterval(callTimer)});
        $('#highlight-image').attr('src', Memories.tastingBeer.content.firestoneWalkerBrewery.image.source);
        $('.highlight-thumbs img:nth-child(2)').css('background-color', '#fff');
        $('.highlight-thumbs img:nth-child(3)').css('background-color', '#000');
        //$('#image-description').html(Memories.tasingBeer.description[theCount]);
        theCount -= 2;
      }
    }
  });

  $('#sportingEvents').click(function(){
    $('#highlight-image').attr('src', Memories.sportingEvents.content.ninerGame.image.source);
    $('.highlight-thumbs img:nth-child(1)').attr('src', Memories.sportingEvents.content.ninerGame.image.source);
    $('.highlight-thumbs img:nth-child(1)').css('background-color', '#000');
    $('.highlight-thumbs img:nth-child(2)').attr('src', Memories.sportingEvents.content.giantsSpringTraining.image.source);
    $('.highlight-thumbs img:nth-child(3)').attr('src', Memories.sportingEvents.content.sharksStadiumSeries.image.source);

    var callTimer = setInterval(function(){rotatePics()}, 4500);

    $('#tastingBeer, #vacations, weddings').click(function(){clearInterval(callTimer)});

    var theCount = 1;

    function rotatePics() {
      if (theCount == 0) {
        $('#highlight-image').attr('src', Memories.sportingEvents.content.ninerGame.image.source);
        $('.highlight-thumbs img:nth-child(3)').css('background-color', '#fff');
        $('.highlight-thumbs img:nth-child(1)').css('background-color', '#000');
        theCount += 1;

      } else if (theCount == 1) {
        $('#highlight-image').attr('src', Memories.sportingEvents.content.giantsSpringTraining.image.source);
        $('.highlight-thumbs img:nth-child(1)').css('background-color', '#fff');
        $('.highlight-thumbs img:nth-child(2)').css('background-color', '#000');
        theCount += 1;
      } else {
        $('#highlight-image').attr('src', Memories.sportingEvents.content.sharksStadiumSeries.image.source);
        $('.highlight-thumbs img:nth-child(2)').css('background-color', '#fff');
        $('.highlight-thumbs img:nth-child(3)').css('background-color', '#000');
        //$('#image-description').html(Memories.sportingEvents.description[theCount]);
        theCount -= 2;
      }
    }
  });

  $('#vacations').click(function(){
    $('#highlight').html(Memories.vacations.content);
  });

  $('#weddings').click(function(){
    $('#highlight').html(Memories.weddings.content);
  });



});