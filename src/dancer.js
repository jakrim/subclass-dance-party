var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.$node.css({top: this.top, left: this.left});
  this.step();
};

Dancer.prototype.step = function() {
  // let contextCall = this.step.bind(this)


  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
