var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.up = false;
  this.$node.addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;


BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (!this.up) {
    this.$node.css({top: this.top - 30, left: this.left});
    this.top -= 30;
  } else {
    this.$node.css({top: this.top + 30, left: this.left});
    this.top += 30;
  }
  this.up = !this.up;
};