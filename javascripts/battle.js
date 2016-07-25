"use strict";


const Battle = function() {

	this.getDamage = function(character) {
		//returns a random damage amount based off the num1/num2 values of the chosen fighters
		return Math.floor(Math.random() * character.num1) + character.num2;
	};

	this.fight = function(tinyToon, animaniac) {
		
		
		
	};

};

module.exports = Battle;