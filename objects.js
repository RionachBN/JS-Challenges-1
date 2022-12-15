const person = {
firstName: "Millie",
lastName: "Jones",
age: 24,
occupation: "Accountant",
married: false,
homeOwner: true,
hobbies: ["netball", "baking", "going to festivals"],
marketingOp () {
if (this.homeOwner == false && this.age > 25) {
    return "Send mortgage offer email"
}
else if(this.homeowner == true && this.age < 25){
    return "Send summer holiday fun card"
}
else if(this.homeowner == true && this.age > 25){
    return "Pension investment offer"
}
else{
    return "Send sensible savings offer"
}
}
}

console.log(person.firstName)
console.log (person.marketingOp ())


// Activity 1
const pet = {
    petName: "Jet",
    typeOfpet: "Bear",
    age: 6,
    colour: "Brown",
    newcolour: "White",
    petFeatures: ["friendly", "protective","cute"]
}
console.log(`I love my ${pet.typeOfpet}. His name is ${pet.petName}.He is ${pet.colour} and he just turned ${pet.age}`)
// Activity 2
console.log(`I love my ${pet.typeOfpet}. It doesn't matter to me that he is now ${pet.newcolour}`)
// Activity 3
console.log(`My bear is ${pet.petFeatures}`)


class Pet {
constructor(name, age, type, breed, colour, time) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.colour = colour;
    this.lastFed = time
}
feedPet (time) {
    this.lastFed = time;
    return `Last feed updated to: ${this.lastFed} for ${this.name}`;
}
}
const Bella = new Pet ("Bella", 2, "Dog", "GS", "B&T", "0800");
console.log(Bella.feedPet("1500"));

const Nala = new Pet ("Nala", 4, "Dog", "Labrador", "Black", "0900");
console.log(Nala.feedPet("0900"));

class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, colour, breed, time);
        this.lastMeds = mtime;
    }
    giveMeds (time) {
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds} for ${this.lastName}`;
    }
}
const bella = new Pet ("Bella", 2, "Dog", "Labrador", "Black", "0800");
const nalla = new PetMeds ("Nala", 4, "Labrador", "Black", "0900", "1400");

// Activity 4
pet.eat = true
pet.drink = false
if (pet.eat == true && pet.drink == true) {
    console.log("My pet is hunry so she is eating and drinking")
}
else if(pet.eat == true && pet.drink == false) {
    console.log("My pet is eating but she isn't drinking")
}
else if(pet.eat == false && pet.drink == true) {
    console.log("My pet is drinking but not eating")
}
else{
    console.log("My pet is not currently eating or drinking")
}
// Activity 5
const coffeeShop = {
    branch: "New York",
    foodWithprices: ["sandwich which is £3", "cake which is £5"],
    drinksWithprices: ["coffee which is £4", "juice which is £3"],

foodOrdered: true,
drinksOrdered: true,
orderStatus () {
    if(this.foodOrdered == true && this.drinksOrdered == true){
        console.log("Your food and drink are ready for payment")
    }
    else if(this.foodOrdered == true && this.drinksOrdered == false){
        console.log("Your food is ready for payment but your drinks are not")
    }
    else if(this.foodOrdered == false && this.drinksOrdered == true){
        console.log("Your drinks are ready for payment but your food is not")
    }
    else{
        console.log("Sorry for the wait but your food and drinks are not ready for payment yet")
    }
}
}
console.log(orderStatus())