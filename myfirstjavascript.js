console.log("Hello Javascript!")

let variable1 = "String Value";
let variable2 = 10;
let variable3 = 13;
let variableBoolean = true;


console.log(variable1)

console.log(variable2 + variable3);
// Do same for other variables...

// Arrays

let myArray = [1, 2, 3];
let myStringArray = ['hello', 'world'];

console.log(myArray[0]);
// Do for different indexes for both arrays...


// Array Methods
console.log(myArray.length);

// Try exploring more...

// Function

function addFunction(value1, value2){

    let sum = value1 + value2;
    return sum;
}

console.log(addFunction(3,4));

// Create more functions for subtraction, multiplication...

function subtractFunction(value1, value2){

    let subtract = value1 - value2;
    return subtract;
}

function multiplyFunction(value1, value2){

    let multiply = value1 * value2;
    return multiply;
}



// Use those functions with console.log

console.log(subtractFunction(3,4));
console.log(multiplyFunction(3,4));


let university = "Deakin University1";

if(university == "Deakin University"){
    console.log("That's Right!")
}
else {
    console.log("That's Wrong. :(")
}