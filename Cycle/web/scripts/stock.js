var Stock = function (name, industry, volatility, startVal) {
	this.name = name;
	this.industry = industry;
	this.volatility = volatility;
	this.value = startVal || 50;
	this.previousVal = null;
	this.emitter = new EventEmitter();
};

Stock.prototype.getName = function () {
	return this.name;
};

Stock.prototype.getIndustry = function () {
	return this.industry;
};

Stock.prototype.getValue = function () {
	return this.value;
};

Stock.prototype.getPreviousValue = function () {
	return this.previousVal;
};

Stock.prototype.change = function () {
	// helper function to get a number between min and max
	function randomRange (min, max) {
		return Math.random() * (max - min) + min;
	}

	this.previousVal = this.value;
	// pretty loaded calculation -- TODO use crypto for truly random numbers
	// Also to reflect a more realistic market change value changes should be reflected 
	// by Industry not individual stocks or some combination.
	this.value *= 1 + randomRange(-1 * this.volatility, this.volatility);
	
	this.emitter.emit('changed');
	return this.value;
};