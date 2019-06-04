$(document).ready(function() {
  window.dancers = [];
  var minTop = 80;
  var minLeft = 15;
  var maxTop = $('body').height() - 100;
  var maxLeft = $('body').width() - 40;
  var minTime = 300;

  $('.addDancerButton').on('click', function() { 
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      Math.max($('body').height() * Math.random(), minTop),
      $('body').width() * Math.random(),
      Math.max(Math.random() * 1000, minTime));

    if (dancer instanceof BouncyDancer) {
      dancer.$node.on('mouseover', function () {
        dancer.changeColor();
      });
    }

    if (dancer instanceof BlinkyDancer) {
      dancer.$node.on('mouseover', function() {
        dancer.bounce();
      });
    }



    $('body').append(dancer.$node);

    dancers.push(dancer);
    // Each dancer finds random dancer
    // Each dancer moves towards nearest dancer


    // Each dancer touching to other
  });

  $('.lineUpButton').on('click', function() {
    dancers.forEach(dancer => dancer.lineUp(minLeft));
  });

  $('.moveButton').on('click', function() {
    dancers.forEach(function(dancer, idx) {
      var random = Math.floor(Math.random() * dancers.length);
      while (random === idx) {
        random = Math.floor(Math.random() * dancers.length);
      }
      var randomPartner = dancers[random];
      dancer.$node.animate({
        top: randomPartner.top,
        left: randomPartner.left,
      }, 1000, 
      function() {
        dancer.top = randomPartner.top;
        dancer.left = randomPartner.left;
      });
    });
  });
  
  $('.congaButton').on('click', function() {
    var corners = {
      topLeft: {top: minTop, left: minLeft},
      topRight: {top: minTop, left: maxLeft}, 
      bottomRight: {top: maxTop, left: maxLeft},
      bottomLeft: {top: maxTop, left: minLeft}
    };
    var timeToTravel = function(distance) {
      var baseVelocity = (maxLeft - minLeft) / 2000;
      return (Math.abs(distance) / baseVelocity);
    };
    // maxTop maxLeft minTop minLeft
    dancers.forEach(function(dancer, idx) {
      if (idx % 2 === 0) {
        var randomHeight = Math.max($('body').height() * Math.random(), minTop);
        dancer.$node.animate({left: minLeft, top: randomHeight}, 1000, function() {
          dancer.left = minLeft;
          dancer.top = randomHeight;
        });
      } else {
        var randomWidth = $('body').width() * Math.random();
        dancer.$node.animate({top: minTop, left: randomWidth}, 1000, function() {
          dancer.top = minTop;
          dancer.left = randomWidth;
        });
      }
    });
    dancers.forEach(function(dancer) {
      // depending on which border - 4 borders - 4 conditionals
      if (dancer.left === minLeft && dancer.top !== minTop) {
        // Go to topleft corner
        dancer.$node.animate({top: minTop}, timeToTravel(dancer.top - minTop), function() {
          dancer.top = minTop;
        });
      } else if (dancer.top === minTop && dancer.left !== maxLeft) {
        // Go to TopRight corner
        dancer.$node.animate({left: maxLeft}, timeToTravel(dancer.left - maxLeft), function() {
          dancer.left = maxLeft;
        });
      } else if (dancer.left === maxLeft && dancer.top !== maxTop) {
        // Go to BottomRight
        dancer.$node.animate({top: maxTop}, timeToTravel(dancer.top - maxTop), function() {
          dancer.top = maxTop;
        });
      } else {
        // Go to BottomLeft
        dancer.$node.animate({left: minLeft}, timeToTravel(dancer.left - minLeft), function() {
          dancer.left = minLeft;
        });
      }
    });
  });

});
  
  
/* This function sets up the click handlers for the create-dancer
   * buttons on dancefloor.html. You should only need to make one small change to it.
   * As long as the "data-dancer-maker-function-name" attribute of a
   * class="addDancerButton" DOM node matches one of the names of the
   * maker functions available in the global scope, clicking that node
   * will call the function to make the dancer.
   */

/* dancerMakerFunctionName is a string which must match
   * one of the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */