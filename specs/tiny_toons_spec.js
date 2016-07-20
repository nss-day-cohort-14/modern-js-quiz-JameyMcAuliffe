"use strict";

let TinyToon = require('../javascripts/tinyToons');

describe('specs for Buster', function() {
	let testBuster = new TinyToon.BusterBunny();
	console.log('testBuster', testBuster);
	it('should behave...Buster is defined', function() {
		expect(testBuster).toBeDefined();
	});
});

describe('specs for Babs', function() {
	let testBabs = new TinyToon.BabsBunny();
	console.log('testBabs', testBabs);
	it('should behave...Babs is defined', function() {
		expect(testBabs).toBeDefined();
	});
});

describe('specs for Plucky', function() {
	let testPlucky = new TinyToon.PluckyDuck();
	console.log('testPlucky', testPlucky);
	it('should behave...Plucky is defined', function() {
		expect(testPlucky).toBeDefined();
	});
});



