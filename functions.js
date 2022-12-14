// const holidayDestinations = () => {
//     console.log("Yay, I'm going on holiday!")
// }
// holidayDestinations()
// const sayHello = (myName, choiceofdrink) => {
//     console.log (`Hi there ${myName}, would you like a glass of ${choiceofdrink}?`)
// }
// sayHello("Rionach", "coke")

// const holidayDestinations = (Chile, May) => {
//     console.log (`Yay I'm going on holiday to ${Chile} in ${May}. I can't wait!`)
// }
// holidayDestinations("Chile", "May")
// const inventory = (productCode, departmentName, quantity) => {
//     console.log(`${quantity} of ${productCode} sold from ${departmentName}, need to update stock by ${quantity}`)
// }
// inventory(412345, "baked goods", 65)
const multiple = (num1, num2) => {
    return num1 * num2
}
console.log(multiple(2,5))

const addMe = (num1, num2) => {
    return num1 + num2
}
console.log(addMe(4,5))

// Higher order functions
const whichGreeting = (timeOfday) => {
    console.log(`Good ${timeOfday}`);
}

const greet = (time, fn) => {
    if(time < 1200) {
        fn("Morning");
    }else if(time >= 1200 && time < 1800){
         fn("Afternoon");
}else{
fn("Evening");
    }
}
greet(1400, whichGreeting);

const add = (num1) => {
    return(num2) => {
        return num1 + num2;
    }
}
console.log(add(2)); 
console.log(add (2) (1));