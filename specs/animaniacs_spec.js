"use strict";

let Animaniac = require('../javascripts/animaniacs');

describe('specs for Yacko', function() {
	let testYacko = new Animaniac.Yacko();
	console.log('testYacko', testYacko);
	it('should behave...Yacko is defined', function() {
		expect(testYacko).toBeDefined();
	});
});

describe('specs for Wacko', function() {
	let testWacko = new Animaniac.Wacko();
	console.log('testWacko', testWacko);
	it('should behave...Wacko is defined', function() {
		expect(testWacko).toBeDefined();
	});
});

describe('specs for Dot', function() {
	let testDot = new Animaniac.Dot();
	console.log('testDot', testDot);
	it('should behave...Dot is defined', function() {
		expect(testDot).toBeDefined();
	});
});

