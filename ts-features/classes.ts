class Vehicle {
  // color: string = "red";  // either initialize here or inside of constructor | pick one
  // color: string;

  // shortcut
  constructor(public color: string) {
    // this.color = color;
  }
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("red");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // do not specify public with color since that will create a new field in car | we want to use the inherited field from Vehicle
    super(color);
  }

  private drive(): void {
    // overriding methods in child class
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
