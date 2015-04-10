// D3 Script
(function () {

	var image = d3.select('image'),
			mask = d3.select('#mask2');

	var square_dim = 45,
			padding_dim = 5;

	var blocks_wide = image.attr('width') / (square_dim + padding_dim),
			blocks_tall = image.attr('height') / (square_dim + padding_dim);

	var matrix = [];

	for (var i = 0; i < blocks_tall; i++) {
		matrix[i] = [];
		for (var j = 0; j < blocks_wide; j++) {
			matrix[i][j] = Math.floor(Math.random() * 2);
		}
	}

	var g = mask.selectAll('g')
			.data(matrix)
			.enter()
			.append('g');

	var rects = g.selectAll('rect')
			.data(function (d, i) { return d; })
			.enter()
			.append('rect')
			.attr({
				"width": square_dim,
				"height": square_dim
			})
			.attr("x", function (d, i, j) {
				return i * (square_dim + padding_dim);
			})
			.attr("y", function (d, i, j) {
				return j * (square_dim + padding_dim);
			})
			.style("fill", "white")
			.style("fill-opacity", function (d, i, j) {
				return (i / blocks_wide + j / blocks_tall) / 2;
			});

}());