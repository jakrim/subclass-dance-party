var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this.up = false;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.bounce = function() {
  var bounceDistance = 60;
  if (!this.up) {
    this.$node.css({top: this.top - bounceDistance, left: this.left});
    this.top -= bounceDistance;
  } else {
    this.$node.css({top: this.top + bounceDistance, left: this.left});
    this.top += bounceDistance;
  }
  this.up = !this.up;
};