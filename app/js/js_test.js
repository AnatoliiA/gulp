consile.log("js");
var x = 10;
x -= 5;
document.getElementById("demo").innerHTML = x;
class Car {  // Create a class
  constructor(brand) {  // Class constructor
    this.carname = brand;  // Class body/properties
  }
}
mycar = new Car("Ford");  // Create an object of Car class
try {
  adddlert("Welcome");
}
catch(err) {
  document.getElementById("demo").innerHTML =
  err.name + "<br>" + err.message;
}