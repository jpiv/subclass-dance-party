var FaceDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.apply(this, arguments);
  $('.willysmith').on('mouseover', function(){
    $(this).addClass('rotate');
  });
  $('.willysmith').on('mouseleave', function(){
    $(this).removeClass('rotate');
  });
  this.$node = $('<img class="dancer willysmith" src="face.png" width="150px"/>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.oldTop = top;
  var selfish = this.selfishMode.bind(this);
  this.$node.on('click', function(){
    selfish();
  });
};

FaceDancer.prototype = Object.create(BlinkyDancer.prototype);
FaceDancer.prototype.constructor = FaceDancer;

FaceDancer.prototype.selfishMode = function(){
  for(var i = 0; i < window.dancers.length; i++){
    window.dancers[i].setPosition(window.dancers[i].oldTop, 0);
    }
    var top = $("body").height()/2;
    var left = $("body").width()/2;
      this.setPosition(top, left);
};

var flip = function(){
    $('.willysmith').addClass('flip180');
};
