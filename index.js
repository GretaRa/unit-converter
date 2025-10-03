/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const lengthOutputEl = document.getElementById("length-output")
const volumeOutputEl = document.getElementById("volume-output")
const massOutputEl = document.getElementById("mass-output")

function processInput (){
    const value = inputEl.value
    calculateConversions(value)
}

processInput() // Run once with default value 20

convertBtn.addEventListener('click', processInput)

function calculateConversions (input){
    const feet = (input * 3.281).toFixed(3);
    const meters = (input / 3.281).toFixed(3);
    const gallons = (input * 0.264).toFixed(3);
    const liters = (input / 0.264).toFixed(3);
    const pounds = (input * 2.204).toFixed(3);
    const kilos = (input / 2.204).toFixed(3);
    renderResults(input, feet, meters, gallons, liters, pounds, kilos)
}

function renderResults (input, feet, meters, gallons, liters, pounds, kilos){
    lengthOutputEl.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
    volumeOutputEl.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
    massOutputEl.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`
}