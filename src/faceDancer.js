var FaceDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.apply(this, arguments);
  this.$node = $('<img class="dancer" src="face.png" width="150px"/>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);debugger;
};

FaceDancer.prototype = Object.create(BlinkyDancer.prototype);
FaceDancer.prototype.constructor = FaceDancer;
FaceDancer.prototype.oldStep = Dancer.prototype.step;
