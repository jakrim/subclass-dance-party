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
    this.$node.animate({
      top: this.top - 30
    }, this.timeBetweenSteps, function() {
      this.top -= 30;
    });
  } else {
    this.$node.animate({
      top: this.top + 30
    }, this.timeBetweenSteps, function() {
      this.top += 30;
    });
  }
  this.up = !this.up;



};

BouncyDancer.prototype.changeColor = function() {
  var randomHexGenerator = function() {
    //16777215 is ffffff converted to base-10
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
  this.$node.css({'border-color': randomHexGenerator()});
};