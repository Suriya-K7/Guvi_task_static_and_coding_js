console.log(`
********************class for Uber*******************

`);
class Uber {
  constructor(name, from, to, distance, carType = "UberXL") {
    this.name = name;
    this.from = from;
    this.to = to;
    this.distance = distance;
    this.carType = carType;
  }
  fare() {
    let rate = 0;
    let fare = 0;
    if (this.carType == "UberXL") {
      rate = 5;
    } else if (this.carType == "Uber Comfort") {
      rate = 10;
    } else if (this.carType == "Uber Black") {
      rate = 15;
    } else if (this.carType == "Uber SUV") {
      rate = 20;
    } else if (this.carType == "Uber WAV") {
      rate = 25;
    }
    fare = this.distance * rate;
    return `${this.name} booked Uber in car type ${this.carType} from ${this.from} - to ${this.to}.
total distance for this ride is ${this.distance}KM & fare for this ride is ${fare} Rupees`;
  }
}
let suriyaRide = new Uber("suriya", "tambaram", "CMBT", 25, "Uber Comfort");
console.log("created using Uber class with all value");
console.log(suriyaRide.fare());
suriyaRide = new Uber("suriya", "tambaram", "CMBT", 20);
console.log("created using Uber class with default");
console.log(suriyaRide.fare());
