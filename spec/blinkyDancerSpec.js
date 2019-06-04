describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  // describe('ES6 refactoring', function() {
  //   it('should not call native method Object.create', function() {
  //     let code = JSON.stringify(blinkyDancer.js);
  //     expect(code.includes('Object.create')).to.be(false);
  //   });
  // })

  describe('bounce', function() {
    it('should have a bouncy method', function() {
      expect(blinkyDancer.bounce).to.be.a('function');
    });
    it('should not be called at construction', function() {
      sinon.spy(blinkyDancer, 'bounce');
      expect(blinkyDancer.bounce.callCount).to.be.equal(0);
    });
  });

});
