
// what number is bigger exercise

let numOne = prompt("Please enter a number")
let numTwo = prompt("and a second number to compare it to")

if (numOne > numTwo) {
  console.log(`${numOne} is bigger than ${numTwo}`)
} else if (numOne < numTwo) {
  console.log(`${numOne} is smaller than ${numTwo}`)
} else if (numOne == numTwo) {
  console.log(`${numOne} is equal to ${numTwo}`)
} 


// driving age exercise

let userName = prompt("What is your name?")
let userAge = prompt("How old are you?")

if (userAge < 16) {
  alert(`Sorry ${userName}, you can't drive yet! 
You have to wait ${16 - userAge} more years before you can drive`)
} else if (userAge >= 16) {
  alert(`Have fun ${userName}, driving into the sunset!`)
}


//Say Hi! exercise

let nationality = prompt("Which nationality are you?")

if (nationality == "english") {
  console.log("Hello")
} else if (nationality == "french") {
  console.log("Bonjour")
} else if (nationality == "norweigan") {
  console.log("Halo")
} else if (nationality == "turkish") {
  console.log("Merhaba")
} else if (nationality == "wookie") {
  console.log("Wyaaaaaa")
} else {
  console.log("How do you say hello where you're from?")
}


// Southern or Northern Hemisphere? exercise

let latitude = 26.5337
let longitude = 81.7553

if ((latitude < 0),(longitude < 0)) {
  console.log("Southern Hemisphere / Western Hemisphere")
} else if ((latitude > 0),(longitude < 0)) {
  console.log("Northern Hemisphere / Western Hemisphere")
} else if ((latitude > 0),(longitude > 0)) {
  console.log("Northern Hemisphere / Eastern Hemisphere")
} else if ((latitude < 0),(longitude > 0)) {
  console.log("Southern Hemisphere / Eastern Hemisphere")
} else {
  console.log("On the equator")
}


// Year in the 19th, 20th or 21st Century? exercise

let year = 1984

if (1801 <= year && year <= 1900) {
  console.log("19th Century")
} else if (1901 <= year && year <= 2000) {
  console.log("20th Century")
} else if (2001 <= year && year <= 2100) {
  console.log("21st Century")
} else {
  console.log("Sorry, it must be another century")
}

// Greet exercise

let hour = 12

if (hour < 10) {
  console.log("Good Morning")
} else if (10 <= hour && hour < 19) {
  console.log("Good Day")
} else {
  console.log("Good Evening")
}