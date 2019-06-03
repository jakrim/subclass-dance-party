var JoseDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps + 300);
  this.$node.addClass('jose');
  // this.$node.append('<img src="assets/joe.jpg">');
  this.joe = true;
};

JoseDancer.prototype = Object.create(Dancer.prototype);
JoseDancer.prototype.constructor = JoseDancer;

JoseDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

if (this.joe) {
  this.$node.empty();
  this.$node.append('<img src="assets/jose.jpg">');
  this.joe = false;
} else {
  this.$node.empty();
  this.$node.append('<img src="assets/joe.jpg">');
  this.joe = true;
}

}