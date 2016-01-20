var Planet = function(top, left, velocity, mass, color) {
  makeGravityDancer.call(this, top, left);
  this.velocity = velocity;
  this.mass = mass;
  this.colorString = this.massToSize() + 'px solid ' + color;
  this.className = 'Planet';
  this.$node.addClass('PlanetStyle');
  this.top = top;
  this.left = left;
};

Planet.prototype = Object.create(makeGravityDancer.prototype);
Planet.prototype.constructor = Planet;

Planet.prototype.massToSize = function() {

  return Math.ceil(Math.log(this.mass+1.1)*10);
};

var Earth = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2,
                        y: this.screenHeight/2 };
  Planet.call(this, this.centerScreen.y - this.screenHeight/4, this.centerScreen.x, {x:0,y:-0.8}, 3, '#00f');
};

Earth.prototype = Object.create(Planet.prototype);
Earth.prototype.constructor = Earth;

var Sun = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2,
                        y: this.screenHeight/2 };
  Planet.call(this, this.centerScreen.y, this.centerScreen.x, {x:0,y:0}, 100, '#ffa500');
  this.$node.addClass('PlanetStyle');
};

Sun.prototype = Object.create(Planet.prototype);
Sun.prototype.constructor = Sun;
