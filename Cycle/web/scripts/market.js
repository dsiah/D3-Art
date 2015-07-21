var stocks = [
	new Stock('GOOG', 'TECH', 0.02), 
	new Stock('AMZN', 'TECH', 0.04),
	new Stock('FB',   'TECH', 0.01)
];

var cy = new Cycle(500);
cy.run();

cy.emitter.on('next day', function () {
	
	stocks.map(function (stock) {
		stock.change();
	});

});
