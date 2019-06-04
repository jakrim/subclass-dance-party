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
  if (!this.up) {
    this.$node.css({top: this.top - 60, left: this.left});
    this.top -= 60;
  } else {
    this.$node.css({top: this.top + 60, left: this.left});
    this.top += 60;
  }
  this.up = !this.up;
};