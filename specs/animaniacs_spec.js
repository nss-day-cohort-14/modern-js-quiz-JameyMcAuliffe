"use strict";

let Animaniac = require('../javascripts/character');

describe('specs for Animaniac', function() {
	let testAnimaniac = new Animaniac();
	console.log('testAnimaniac', testAnimaniac);
	it('should behave...character is defined', function() {
		expect(testAnimaniac).toBeDefined();
	});
	it('have a health attribute', function() {
		expect(testAnimaniac.health).toBeDefined();
	});
	it('have a damage attribute', function() {
		expect(testAnimaniac.damage).toBeDefined();
	});
	it('have a type attribute', function() {
		expect(testAnimaniac.type).toBeDefined();
	});
});