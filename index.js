/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meter = 1
let feet = meter * 3.281
let liter = 1
let gallon = liter * 0.264
let kilogram = 1
let pound = kilogram * 2.204
const inpText = document.getElementById("inp-text")
const metP = document.getElementById("met-p")
const litP = document.getElementById("lit-p")
const kilP = document.getElementById("kil-p")
const Btn = document.getElementById("btn")
inpText.value = 0
btn.addEventListener("click", function() {
    metP.textContent = `${inpText.value} meters = ${Math.round(inpText.value * 3.281*100)/100} feet | ${inpText.value} feet = ${Math.round(inpText.value * 0.304 *100)/100} meters`
    litP.textContent = `${inpText.value} liters = ${Math.round(inpText.value * 0.264 *100)/100} gallons | ${inpText.value} gallons = ${Math.round(inpText.value * 3.785 *100)/100} liters`
    kilP.textContent = `${inpText.value} kilos = ${Math.round(inpText.value * 2.204 *100)/100} pounds | ${inpText.value} pounds = ${Math.round(inpText.value * 0.453592*100)/100} kilos`
})

