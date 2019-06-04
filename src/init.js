$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function() { 
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      Math.max($('body').height() * Math.random(), 100),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    if (dancer instanceof BouncyDancer) {
      dancer.$node.on('mouseover', function () {
        //16777215 is ffffff converted to base-10
        dancer.$node.css({'border-color': '#' + Math.floor(Math.random() * 16777215).toString(16)});
      });
    }

    $('body').append(dancer.$node);

    dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function() {
    dancers.forEach(ele => ele.lineUp());
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