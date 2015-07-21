// Terminal for viewing stocks
var terminal = d3.select('#terminal');

var backbox = terminal.append('rect')
	.attr({
		x: 0,
		y: 0,
		rx: 2,
		ry: 2,
		height: 30,
		width: 220
	})
	.style({
		'fill': 'steelblue',
		'border-radius': 3
	});

var date = terminal.selectAll('text')
		.data([cy.getTime()])
		.enter()
		.append('text'); // initialize Date node

cy.emitter.on('next day', function () {

	date.data([cy.getTime()])
			.attr({
				x: 20,
				y: 20,
				height: 50,
				width: 50
			})
			.text(function (date) {
				var date_string = 'Month: ' + date.month;
				date_string += ' Day: ' + date.day;
				date_string += ' Year: ' + date.year;

				return date_string;
			})
			.style('font-family', 'Helvetica')
			.style('fill', 'white');
});

stocks.map(function (stock, index) {
	// Need to do this in a more systematic fashion; this can be refactored with svg groups!
	var blocks = terminal.append('rect')
			.attr({
				x: 75,
				y: index * 180 + 40,
				rx: 2,
				ry: 2,
				height: 170,
				width: 400
			})
			.style('fill', 'grey')
			.style('fill-opacity', 0.60);

	var title_group = terminal.append('g');

	title_group.append('text')
			.attr({
				x: 20,
				y: index * 180 + 150 / 2 + 50, // hacky math -- refactor
				height: 50,
				width: 50
			})
			.text(function () {
				return stock.getName();
			})
			.style('font-family', 'Helvetica')
			.style('fill', 'brown')

	var value = title_group.append('text')
			.attr({
				x: 20,
				y: index * 180 + 170 / 2 + 70, // hacky math -- refactor
				height: 50,
				width: 50
			})
			.text(function () {
				return stock.getValue();
			})
			.style('font-family', 'Helvetica');

	// Map ALL the listeners!
	stock.emitter.on('changed', function () {
		// D3 Logic to change text
		value.text(function () {
			return parseFloat(stock.getValue()).toFixed(2);
		});

	});

});