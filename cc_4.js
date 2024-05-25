// U89173488

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

// Create a 'Tesla' starting at 120 km/h with a battery charge of 23%
const tesla = new EV('Tesla', 120, 23);

// Test accelerate method
tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
tesla.accelerate(); // Tesla going at 160 km/h, with a charge of 21%

// Test brake method
tesla.brake(); // Tesla going at 155 km/h

// Test chargeBattery method
tesla.chargeBattery(50);
console.log(`Battery charge is now ${tesla.charge}%`); // Battery charge is now 50%


