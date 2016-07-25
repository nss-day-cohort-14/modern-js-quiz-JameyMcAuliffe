"use strict";


const Battle = function() {

	this.tinyToon = null;
	this.animaniac = null;

	this.getDamage = function(num1, num2) {
		return Math.floor(Math.random() * num1) + num2;
	};

	this.fight = function(tinyToon, animaniac) {
		this.tinyToon.getDamage(tinyToon.num1, tinyToon.num2);
		this.animaniac.getDamage(animaniac.num1, animaniac.num2);

	};

};

module.exports = Battle;