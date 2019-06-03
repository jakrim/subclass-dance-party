var JoseDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jose');
  
};

JoseDancer.prototype = Object.create(Dancer.prototype);
JoseDancer.prototype.constructor = JoseDancer;
