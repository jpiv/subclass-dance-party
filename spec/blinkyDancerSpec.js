describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("Willy Boy", function() {

  var faceDancer;

  beforeEach(function(){
    faceDancer = new FaceDancer(10, 20, 100);
  });

  it('should instantiate new FaceDancer', function(){
    expect(faceDancer.constructor).to.equal(FaceDancer);
  });
  it('should contain "selfishMode" method', function(){
    expect(faceDancer.selfishMode).to.equal(FaceDancer.prototype.selfishMode);
  })

});

describe("Moove that booty", function() {

  var movingDancer;

  beforeEach(function(){
    movingDancer = new MovingDancer(10, 20, 100);
  });

  it('should instantiate new MovingDancer', function(){
    expect(movingDancer.constructor).to.equal(MovingDancer);
  });

});
