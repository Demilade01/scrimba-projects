/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
20 meters = 65.616 feet | 20 feet = 6.096 meters
`${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(3)} meters`;
*/
let inputField = document.getElementById("input-field")
const inputBtn = document.getElementById("input-btn")
let subOne = document.getElementById("subOne");
let subTwo = document.getElementById("subTwo");
let subThree = document.getElementById("subThree");

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

inputBtn.addEventListener("click", function() {
  let inputValue = ""
  inputValue = parseFloat(inputField.value)
  
  const lengthConversion = `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} meters = ${(inputValue / meterToFeet).toFixed(3)} meters`;
  const volumeConversion = `${inputValue} liters = ${(inputValue * meterToFeet).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / meterToFeet).toFixed(3)} liters`;
  const MassConversion = `${inputValue} kilos = ${(inputValue * meterToFeet).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / meterToFeet).toFixed(3)} liters`;
  
  if(!inputValue) {
      alert('Please enter a number')
  }
  subOne.textContent = lengthConversion; 
  subTwo.textContent = volumeConversion;
  subThree.textContent = MassConversion;

  inputField.value = ""
    
})
