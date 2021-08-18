class Vehicle {
  protected honk(): void {
    console.log("beep");
  }
}

// const vehicle = new Vehicle();
// vehicle.honk();

class Car extends Vehicle {
  private drive(): void {
    // overriding methods in child class
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
// car.drive();
car.startDrivingProcess();
// car.honk();
