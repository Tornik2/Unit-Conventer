/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inpText = document.getElementById("inp-text")
const metP = document.getElementById("met-p")
const litP = document.getElementById("lit-p")
const kilP = document.getElementById("kil-p")
const Btn = document.getElementById("btn")
inpText.value = "0"
btn.addEventListener("click", function() {
    let inptvalue = inpText.value
    metP.textContent = `${inptvalue} meters = ${Math.round(inptvalue * 3.281*100)/100} feet 
    | ${inptvalue} feet = ${Math.round(inptvalue * 0.304 *100)/100} meters`
    litP.textContent = `${inptvalue} liters = ${Math.round(inptvalue * 0.264 *100)/100} gallons 
    | ${inptvalue} gallons = ${Math.round(inptvalue * 3.785 *100)/100} liters`
    kilP.textContent = `${inptvalue} kilos = ${Math.round(inptvalue * 2.204 *100)/100} pounds 
    | ${inptvalue} pounds = ${Math.round(inptvalue * 0.453592*100)/100} kilos`
})

