class car {
    constructor(brand, model, color, year, bodyStyle, fuel, mpg, odometer){
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year
        this.bodyStyle = bodyStyle
        this.fuel = fuel
        this.mpg = mpg
        this.odometer = odometer
    }

    getCarDdetails(){
        console.log(`\n                     Brand: ${this.brand} \n 
                     Model: ${this.model} \n 
                     Color: ${this.color} \n 
                     Year: ${this.year} \n 
                     Body Style: ${this.bodyStyle} \n
                     Fuel: ${this.fuel} \n
                     MPG: ${this.mpg}\n
                     Odometer: ${this.odometer}`)
    }
    changeColor(newColor){
        this.color = newColor
        console.log(this.color);
    }
    drive(miles){
        let milesDriven = 0
        let totalMiles = 0
        while(miles){
            //Shows our progress of miles driven
            this.odometer++
            milesDriven++
            totalMiles++
            //For each 20 miles (this.mpg) we should subtract 1 gallon of gas
            if(milesDriven === this.mpg){
                this.fuel--
                milesDriven = 0
            }

            miles--
            //If we run out of gas show details
            if(this.fuel === 0){
                console.log(`\nRan out of gas\nFuel: ${this.fuel}\nOdometer: ${this.odometer}`);
                miles = false
            }
        }
        console.log(`\n Miles Driven: ${totalMiles}\n Fuel: ${this.fuel}`);
        
    }
    addFuel(gas){
        if (this.fuel + gas > 20){
            console.log('To much Gas, lessen the load');
        }else{
            this.fuel = this.fuel + gas
            console.log(this.fuel);
        }

    }
}

const firstCar = new car('Honda', 'Oddysey', 'blue', 2005, 'mini-van', 10, 20, 20000)
firstCar.getCarDdetails()
firstCar.changeColor('Orange')
firstCar.addFuel(9)
firstCar.drive(380)
