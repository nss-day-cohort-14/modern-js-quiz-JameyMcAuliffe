"use strict";

let TinyToon = require('../javascripts/character');

describe('specs for TinyToon', function() {
	let testTinyToon = new TinyToon();
	console.log('testTinyToon', testTinyToon);
	it('should behave...character is defined', function() {
		expect(testTinyToon).toBeDefined();
	});
	it('have a health attribute', function() {
		expect(testTinyToon.health).toBeDefined();
	});
	it('have a damage attribute', function() {
		expect(testTinyToon.damage).toBeDefined();
	});
	it('have a type attribute', function() {
		expect(testTinyToon.type).toBeDefined();
	});
});