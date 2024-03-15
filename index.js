/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
let resultFeet = document.getElementById("result-feet");
let resultGallons = document.getElementById("result-gallons");
let resultPounds = document.getElementById("result-pounds");

convertBtn.addEventListener("click", function() {
    let metricNumber = inputEl.value;
    convertFeet = (metricNumber * 3.281).toFixed(2);
    convertGallons = (metricNumber * 0.264).toFixed(2);
    convertPounds = (metricNumber * 2.204).toFixed(2);
    resultFeet.textContent = convertFeet;
    resultGallons.textContent = convertGallons;
    resultPounds.textContent = convertPounds;
})

/* function getConversion() {
    return inputEl + 10;
    console.log (getConversion);
} */