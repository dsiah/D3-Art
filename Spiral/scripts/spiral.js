var yummy = [];

for (var i = 0; i < 64; i++){
	yummy.push(Math.pow(i, 1.4));
}

var easel = d3.select('svg').attr({
	height: 500,
	width: 1000
});

var colorScale = d3.scale.linear()
    .domain([d3.min(yummy), d3.max(yummy)])
    .interpolate(d3.interpolateHcl)
    .range(["#007AFF", "#FFF500"]);

/*
    .interpolate(d3.interpolateHsl)
    .interpolate(d3.interpolateLab)
    .interpolate(d3.interpolateRgb)
*/

easel.selectAll('rect')
	 	 .data(yummy)
	 	 .enter()
	 	 .append('rect')
	 	 .attr({
	 	 		x: function (d, i, j) {
	 	 			return Math.cos(360 / (i + 1)) * 100 + 150;
	 	 		},
	 	 		y: function (d, i, j) {
	 	 			return Math.sin(360 / (i + 1)) * 100 + 150;
	 	 		},
	 	 		width: function (d) {
	 	 			return d;
	 	 		},
	 	 		height: 7,
	 	 		fill: function (d, i, j) {
	 	 			return colorScale(d);
	 	 		}
	 	 });