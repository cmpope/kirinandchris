$(document).ready(function() {

  var Memories = {
    "tastingBeer" : {
      "content" : "<div id='highlight-image' class='col-md-8'><img class='img-responsive' style='width: 750px;' src='static/sierra-nevada-brewery.JPG' alt='kirin-mysorewala-chris-pope-wedding-memories-sierra-nevada'></div><div class='col-md-4'><h3>Tasting Beer</h3><p>Kirin and Chris share a passion for great beer. Visiting breweries is one of their favorite things to do together. Some of their California favorites include Alesmith, Sierra Nevada, Russian River and Firestone Walker.</p><div id='image-description' class='description'><h4><em>Sierra Nevada Brewing Company</em></h4><h4><em>February 16, 2013, Chico, California</em></h4></div>",
      "images" : [
        "<img class='img-responsive' style='width: 750px;' src='static/sierra-nevada-brewery.JPG' alt='kirin-mysorewala-chris-pope-sierra-nevada-brewery'>",
        "<img class='img-responsive' style='width: 750px;' src='static/bear-republic-brewery-hd.jpg' alt='kirin-mysorewala-chris-pope-bear-republic-brewery'>",
        "<img class='img-responsive' style='width: 750px;' src='static/firestone-walker-brewery-hd.JPG' alt='kirin-mysorewala-chris-pope-firestone-walker-brewery'>"
      ],
      "description" : [
        "<h4><em>Sierra Nevada Brewing Company</em></h4><h4><em>February 16, 2013, Chico, California</em></h4>",
        "<h4><em>Bear Republic Brewing Company</em></h4><h4><em>August 18, 2013, Healdsberg, California</em></h4>",
        "<h4><em>Firestone Walker Brewing Company</em></h4><h4><em>July 28, 2013, San Louis Obispo, California</em></h4>"
      ]
    },
    "sportingEvents" : {
      "content" : "<div id='highlight-image' class='col-md-8'><img class='img-responsive' style='width: 750px;' src='static/49er-game-hd.JPG' alt='kirin-mysorewala-chris-pope-wedding-memories-49er-game'></div><div class='col-md-4'><h3>Sporting Events</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p><div id='image-description' class='description'><h4><em>Sierra Nevada Brewing Company</em></h4><h4><em>February 16, 2013, Chico, California</em></h4></div>",
      "images" : [
        "<img class='img-responsive' style='width: 750px;' src='static/49er-game-hd.JPG' alt='kirin-mysorewala-chris-pope-49er-game'>",
        "<img class='img-responsive' style='width: 750px;' src='static/giants-spring-training-hd.JPG' alt='kirin-mysorewala-chris-pope-giants-spring-training'>",
        "<img class='img-responsive' style='width: 750px;' src='static/sharks-stadium-series-hd.JPG' alt='kirin-mysorewala-chris-pope-firestone-walker-brewery'>"
      ],
      "description" : [
        "<h4><em>Sierra Nevada Brewing Company</em></h4><h4><em>February 16, 2013, Chico, California</em></h4>",
        "<h4><em>Bear Republic Brewing Company</em></h4><h4><em>August 18, 2013, Healdsberg, California</em></h4>",
        "<h4><em>Firestone Walker Brewing Company</em></h4><h4><em>July 28, 2013, San Louis Obispo, California</em></h4>"
      ]
    },
    "vacations" : {
      "content" : "<div id='highlight-image' class='col-md-8'><img class='img-responsive' style='width: 750px;' src='static/hawaii-pls-2013.JPG' alt='kirin-mysorewala-chris-pope-wedding-memories-hawaii'></div><div class='col-md-4'><h3>Vacations</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p><h3>Brewery Visits</h3><ul><li>Russian River - 6/12</li><li>Sierra Nevada - 7/13</li><li>Consectetur</li><li>Adipiscing Elit</li></ul></div>"
    },
    "weddings" : {
      "content" : "<div id='highlight-image' class='col-md-8'><img class='img-responsive' style='width: 750px;' src='static/kirin-chris-jenny-wedding-hd.jpg' alt='kirin-mysorewala-chris-pope-wedding-memories-jenny-wedding'></div><div class='col-md-4'><h3>Weddings</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p><h3>Brewery Visits</h3><ul><li>Russian River - 6/12</li><li>Sierra Nevada - 7/13</li><li>Consectetur</li><li>Adipiscing Elit</li></ul></div>"
    }
  };

  $('#tastingBeer').click(function(){
    $('#highlight').html(Memories.tastingBeer.content);

    var callTimer = setInterval(function(){rotatePics()}, 4500);

    $('#sportingEvents, #vacations, weddings').click(function(){clearInterval(callTimer)});

    var theCount = 1;

    function rotatePics() {
      if (theCount == 0) {
        $('#highlight-image').html(Memories.tastingBeer.images[theCount]);
        $('#image-description').html(Memories.tastingBeer.description[theCount]);
        theCount += 1;

      } else if (theCount == 1) {
        $('#highlight-image').html(Memories.tastingBeer.images[theCount]);
        $('#image-description').html(Memories.tastingBeer.description[theCount]);
        theCount += 1;
      } else {
        $('#highlight-image').html(Memories.tastingBeer.images[theCount]);
        $('#image-description').html(Memories.tastingBeer.description[theCount]);
        theCount -= 2;
      }
    }

    
  });

  $('#sportingEvents').click(function(){
    $('#highlight').html(Memories.sportingEvents.content);

    var callTimer = setInterval(function(){rotatePics()}, 4500);

    $('#tastingBeer, #vacations, weddings').click(function(){clearInterval(callTimer)});

    var theCount = 1;

    function rotatePics() {
      if (theCount == 0) {
        $('#highlight-image').html(Memories.sportingEvents.images[theCount]);
        $('#image-description').html(Memories.sportingEvents.description[theCount]);
        theCount += 1;

      } else if (theCount == 1) {
        $('#highlight-image').html(Memories.sportingEvents.images[theCount]);
        $('#image-description').html(Memories.sportingEvents.description[theCount]);
        theCount += 1;
      } else {
        $('#highlight-image').html(Memories.sportingEvents.images[theCount]);
        $('#image-description').html(Memories.sportingEvents.description[theCount]);
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