
function Vehicle(name,wheelsNumber,passangersNumber,speed,vinNumber){

  this.name = name;
  this.wheelsNumber = wheelsNumber;
  this.passangersNumber = passangersNumber;
  this.speed = speed;
  this.distance_travelled = 0;
  this.vinNumber = Math.floor((Math.random() * 100) + 1);

  }

  Vehicle.prototype.updateDistanceTravelelled = function(){
  this.distance_travelled += this.speed;
  return this;
  };

  Vehicle.prototype.makeNoise = function(){
    if (this.name == 'Bike'){
      console.log(this.name + ' Ring ring!!!')
    }
    else if(this.name == 'Sedan'){
      console.log(this.name + ' Honk honk!!!')
    }
    return this;
  };

  Vehicle.prototype.move = function(){
  this.updateDistanceTravelelled();
  this.makeNoise();
  return this;
  };

  Vehicle.prototype.checkMiles = function(){
    return this.distance_travelled;
  }

var bike = new Vehicle('Bike', 2, 1, 40);
var sedan = new Vehicle('Sedan', 4, 5, 50);
var bus = new Vehicle('Bus', 6, 1, 38);

bike.makeNoise().move().updateDistanceTravelelled().checkMiles();
console.log(bike);

sedan.makeNoise().move().updateDistanceTravelelled().checkMiles();
console.log(sedan);




var bus = new Vehicle("Bus", 4, 10, 30);
console.log(bus);
Vehicle.prototype.passangersAdd = function(passengersPickUp) {
    this.passangersNumber += passengersPickUp;
   console.log('Bus took ' + this.passangersNumber + ' passengers');
   }
bus.passangersAdd(12);
bus.passangersAdd(10);
bus.updateDistanceTravelelled();

  

