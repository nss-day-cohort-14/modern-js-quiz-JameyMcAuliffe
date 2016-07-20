"use strict";

let Wildcard = require('../javascripts/character');

describe('specs for Wildcard', function() {
	let testWildcard = new Wildcard();
	console.log('testWildcard', testWildcard);
	it('should behave...character is defined', function() {
		expect(testWildcard).toBeDefined();
	});
	it('have a health attribute', function() {
		expect(testWildcard.health).toBeDefined();
	});
	it('have a damage attribute', function() {
		expect(testWildcard.damage).toBeDefined();
	});
	it('have a type attribute', function() {
		expect(testWildcard.type).toBeDefined();
	});
});