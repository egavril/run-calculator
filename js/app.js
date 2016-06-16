var distanceInput = document.getElementById('distanceInput');
var hoursInput = document.getElementById('hoursInput');
var minutesInput = document.getElementById('minutesInput');
var secondsInput = document.getElementById('secondsInput');
var calculateButton = document.getElementById('calculateButton');
var paceOutput = document.getElementById('pace');


function distanceSliderOutput(dist) {
	document.querySelector('#distanceInput').value = dist;
}

function timeSliderOutput(time) {
	var secondsFromSlider = document.querySelector('#secondsInput').value = time;
	if (secondsFromSlider > 59 || secondsFromSlider < 3599) {
		document.querySelector('#minutesInput').value = document.querySelector('#secondsInput').value / 60;
	}
	if (secondsFromSlider > 3599) {
		document.querySelector('#hoursInput').value = document.querySelector('#minutesInput').value / 60;
	}

	console.log(secondsFromSlider);
}

calculateButton.addEventListener('click', function() {
  
	//convert input strings to number values
	var miles = parseFloat(distanceInput.value); 
	var	hours = parseFloat(hoursInput.value);
	var	minutes = parseFloat(minutesInput.value);
	var	seconds = parseFloat(secondsInput.value);



	//convert to minutes per mile
	var totalMinutes = ((hours * 60) + minutes + (seconds / 60)),
			pace = (totalMinutes / miles), 
			paceMinutes = Math.floor(pace), 
			paceSeconds = Math.round((pace - paceMinutes) * 60);

	if (paceSeconds < 10) {
		paceSeconds = '0' + paceSeconds;
	}
	
	return paceInput.value = paceMinutes + ':' + paceSeconds;

  
});