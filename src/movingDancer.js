var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.top = top;
  this.left = left;
  this.iterate = 0;
  this.moved = false;
  this.timeBetweenSteps = timeBetweenSteps;
};
MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.oldStep = Dancer.prototype.step;

MovingDancer.prototype.step = function(){
  if(this.moved){
    this.top -= 40;
    this.moved = false;
  } else {
    this.top += 40;
    this.moved = true;
  }
  this.setPosition(this.top, this.left);
  this.oldStep();
}
