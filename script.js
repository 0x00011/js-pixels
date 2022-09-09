function createPxElement(element) {
	var px = document.createElement("div");
	px.className = "px";
	
	// generate random rgb colors
	var g = Math.floor(Math.random() * 256);
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	px.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
	element.appendChild(px);
	
	setInterval(function() {
		px.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	}, Math.floor(Math.random() * 500));
}



// Epilepsy warning
var timeRemaining = 5;
const timeInterval = setInterval(() => {
	timeRemaining -= 1;
	document.querySelector('#time').innerHTML = timeRemaining;
}, 1000);

setTimeout(() => {
	document.querySelector('#warning').style.opacity = 0;
	clearInterval(timeInterval);
}, 5000);



// Colorful Pixels
var width = document.body.clientWidth / 15;
var height = document.body.clientHeight / 15;
var i = 0;

while(i < height) {
	var j = 0;
	var row = document.createElement(`div`);
	row.className = `row row-${i}`;
	document.body.appendChild(row);

	while(j < width) {
		createPxElement(row)
		j++;
	}

	i++;
}