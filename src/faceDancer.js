var FaceDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.apply(this, arguments);
  this.$node = $('<img class="dancer death" src="face.png" width="150px"/>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);console.log($(".death"));
  var selfish = this.selfishMode.bind(this);
  $(".death").on('click', function(){
    selfish();
  });
};

FaceDancer.prototype = Object.create(BlinkyDancer.prototype);
FaceDancer.prototype.constructor = FaceDancer;
FaceDancer.prototype.oldStep = Dancer.prototype.step;

FaceDancer.prototype.selfishMode = function(){
  var top = Number(this.$node.css('top').slice(0,7));
  var left = Number(this.$node.css('left').slice(0,7));
  var closestNode, nodeTop, nodeLeft, closest = 100000, distance;
  for(var i = 0; i < window.dancers.length; i++){
    nodeTop = Number(window.dancers[i].$node.css('top').slice(0,7));
    nodeLeft = Number(window.dancers[i].$node.css('left').slice(0,7));
    distance = Math.sqrt(Math.pow(nodeLeft-left, 2) + Math.pow(nodeTop-top, 2));
    if(distance < closest){
      closestNode = window.dancers[i].$node;
      closest = distance;
    }
  }
  closestNode.css("left", 0);
};


