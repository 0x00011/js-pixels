function HexToRgbs(hex) {
	var r = parseInt(hex.slice(1, 3), 16),
	g = parseInt(hex.slice(3, 5), 16),
	b = parseInt(hex.slice(5, 7), 16);
	
	var colors = [[r, g, b]]

	for (var i = 0; i < 30; i++) {
		r = Math.round(r - Math.abs(r - 0)/30);
		g = Math.round(g - Math.abs(g - 0)/30);
		b = Math.round(b - Math.abs(b - 0)/30);
		
		if (r < 0) r = 0;
		if (g < 0) g = 0;
		if (b < 0) b = 0;
		
		colors.push([r, g, b]);
	}
	
	return colors;
}


const colorPicker = document.querySelector('input[type="color"]');
document.querySelector('.color-button').addEventListener('click', () => colorPicker.click(), false);


colorPicker.addEventListener('input', (e) => {
	const values = HexToRgbs(e.target.value);
	for(var j = 0; j < 30; j++) {
		document.getElementsByClassName(`palette`)[j].style.backgroundColor = `rgba(${values[j][0]}, ${values[j][1]}, ${values[j][2]}, 1)`;
	}
})