var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.top = top;
  this.iterate = 0;
  this.moved = false;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.oldStep = Dancer.prototype.step;

MovingDancer.prototype.step = function(){
  if(this.iterate === 2)
  {
      if(this.moved)
      {
        this.top -= 20;
        this.moved = false;
        this.setPosition(this.top, this.left);
      }
      else
      {
        this.top += 20;
        this.moved = true;
        this.setPosition(this.top, this.left);
      }
    this.iterate=0;
  }
  this.iterate ++;
  this.oldStep();
}
