"use strict";

let Character = require('../javascripts/character');

describe('specs for character', function() {
	let testCharacter = new Character();
	console.log('testCharacter', testCharacter);
	it('should behave...character is defined', function() {
		expect(testCharacter).toBeDefined();
	});
	it('have a health attribute', function() {
		expect(testCharacter.health).toBeDefined();
	});
	it('have a damage attribute', function() {
		expect(testCharacter.damage).toBeDefined();
	});
	it('have a type attribute', function() {
		expect(testCharacter.type).toBeDefined();
	});
});