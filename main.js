/*
ic-07
Sara Kent
*/

// constants for frame
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = {left: 80, right: 80, top: 80, bottom: 80};

// dataset
const data = [55000, 48000, 27000, 66000, 90000];

// area to be plotted in 
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

// add frame
const FRAME3 =
	d3.select("#vis")
		.append("svg")
			.attr("height", FRAME_HEIGHT)
			.attr("width", FRAME_WIDTH)
			.attr("class", "frame");


// scaling function
const MAX_Y = d3.max(data, (d) => {return d;})

const Y_SCALE = d3.scaleLinear() 
					.domain([0, (MAX_Y + 10000)]) 
					.range([0, VIS_WIDTH]); 


// plot the data
FRAME3.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", MARGINS.left)
			.attr("cy", (d) => {
				return (Y_SCALE(d) + MARGINS.top); // scale the data
			})
			.attr("r", 10)
			.attr("class", "point");

// add axis
FRAME3.append("g")
		.attr("transform",
			"translate(" + (MARGINS.left) + "," 
			+ MARGINS.bottom + ")")
		.call(d3.axisLeft(Y_SCALE).ticks(4))
		.attr("font-size", "20px");



