var Cycle = function (rate) {
	var public = {},
		 	eventLoop;

	this.rate = rate || 1000; // every second default
	clock = { day: 0, month: 1, year: 0 }; // internal clock

	public.emitter = new EventEmitter();

	public.incrementDay = function (amount) {
		if (clock.day === 30) {
			public.incrementMonth(1);
			clock.day = 0;
		}

		public.emitter.emit('next day');
		clock.day += amount;
		return clock;
	};

	public.incrementMonth = function (amount) {
		if (clock.month === 12) {	
			public.incrementYear(1);
			public.emitter.emit('next year');
			clock.month = 0;
		}
		
		public.emitter.emit('next month');
		clock.month += amount;
		return clock;
	};

	public.incrementYear = function (amount) {
		clock.year += amount;
		return clock;
	};

	public.run = function () {
		if (!rate) {
			eventLoop = setInterval(function () { 
				public.incrementDay(1); 
			}, 1000);
		} else {
			eventLoop = setInterval(function () { 
				public.incrementDay(1);
			}, rate); // eventloop recieves the interval object that can be stopped with clearInterval
		}		
	};

	public.getTime = function () {
		return clock;
	};

	public.pause = function () {
		public.emitter.emit('paused');
		clearInterval(eventLoop);
	};

	return public;
};