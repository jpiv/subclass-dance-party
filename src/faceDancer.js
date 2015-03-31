var FaceDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.apply(this, arguments);
  $('.death').on('mouseover', function(){
    console.log('here!');
    // debugger;
    $(this).css('transform', 'rotate(14deg)');
  });
  $('.death').on('mouseleave', function(){
    console.log('here!');
    // debugger;
    $(this).css('transform', 'rotate(0deg)');
  });
  this.$node = $('<img class="dancer death" src="face.png" width="150px"/>');
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
FaceDancer.prototype.oldStep = Dancer.prototype.step;

FaceDancer.prototype.selfishMode = function(){
  // debugger;
  for(var i = 0; i < window.dancers.length; i++){
    window.dancers[i].setPosition(window.dancers[i].oldTop, 0);
    // if(window.dancers[i]['timeBetweenSteps'] === this['timeBetweenSteps'])
    }
    var top = $("body").height()/2;
    var left = $("body").width()/2;
      this.setPosition(top, left);
};


    // nodeTop = Number(window.dancers[i].$node.css('top').slice(0,7));
    // nodeLeft = Number(window.dancers[i].$node.css('left').slice(0,7));
    // distance = Math.sqrt(Math.pow(nodeLeft-left, 2) + Math.pow(nodeTop-top, 2));
    // if(distance < closest){
    //   closestNode = window.dancers[i].$node;
    //   closest = distance;
    // }
