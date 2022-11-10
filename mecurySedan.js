
//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    

    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
            if(this.passenger+num<=this.maximumPassengers){
                this.passenger+=num
                return this.passenger
            }
            else{
                console.log(`There is not enough room to fit ${num} extra passengers.`)
            }
        }

        else{
            console.log("The car is already full.")
        }
    }

    start(){
        if(this.fuel>0){
            return this.started = true
        }
        else{
            return this.started = false
        }
    }

    scheduleService(){
        if(this.mileage>30000){
            this.scheduleService = true
            return this.scheduleService
            console.log("Time for maintenance")
        }
    }
}