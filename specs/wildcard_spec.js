"use strict";

let Wildcard = require('../javascripts/wildcard');

describe('specs for Pinky', function() {
	let testPinky = new Wildcard.Pinky();
	console.log('testPinky', testPinky);
	it('should behave...Pinky is defined', function() {
		expect(testPinky).toBeDefined();
	});
});

describe('specs for Brain', function() {
	let testBrain = new Wildcard.TheBrain();
	console.log('testBrain', testBrain);
	it('should behave...Brain is defined', function() {
		expect(testBrain).toBeDefined();
	});
});

describe('specs for Gogo', function() {
	let testGogo = new Wildcard.GogoDodo();
	console.log('testGogo', testGogo);
	it('should behave...Gogo is defined', function() {
		expect(testGogo).toBeDefined();
	});
});

