var elDagreeForm = document.querySelector(".degree-form");
var elDegreeTaker = document.querySelector(".temperature-taker");
var elCheckRain = document.querySelector(".condition-rain");

var minTemperature = 10;
var maxTemperature = 40;

elDagreeForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  var elDegreeTakerValue = Number(elDegreeTaker.value);
  elDegreeTaker.value = "";

  var elCheckedRain = elCheckRain.checked;

  if (elDegreeTakerValue <= minTemperature || elCheckedRain){
    alert("The weather is bad, and it's raining today, please select another day for walking!")
  } else if (elDegreeTakerValue >= maxTemperature){
    alert("The weather is very hot, please select another day for walking!")
  } else if (elDegreeTakerValue > minTemperature || elDegreeTakerValue < maxTemperature){
    alert("Today is the best day for walking!")
  } 
})