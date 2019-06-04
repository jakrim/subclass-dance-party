var SurpriseDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps + 100);
  this.$node.addClass('surprise');
  this.joe = true;
};

SurpriseDancer.prototype = Object.create(Dancer.prototype);
SurpriseDancer.prototype.constructor = SurpriseDancer;

SurpriseDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  if (this.joe) {
    this.$node.empty();
    this.$node.append('<img class="surprisePhoto" src="assets/jose.png">');
    this.joe = false;
  } else {
    this.$node.empty();
    this.$node.append('<img class="surprisePhoto" src="assets/joe.jpg">');
    this.joe = true;
  }

};