"use strict";

const Character = require('./character');

//Type 3 function
function Wildcard() {
	Character.call(this);
	//random health range from 80-95
	this.health = Math.floor(Math.random() * 16) + 80;
}

//Type 3 model functions
const Pinky = function() {
	Wildcard.call(this);
	this.health += 10;
	//numbers passed into getDamage function
	this.num1 = 15;
	this.num2 = 5;
};

const TheBrain = function() {
	Wildcard.call(this);
	this.health += 15;
	//numbers passed into getDamage function
	this.num1 = 5;
	this.num2 = 10;
};

const GogoDodo = function() {
	Wildcard.call(this);
	this.health += 20;
	//numbers passed into getDamage function
	this.num1 = 30;
	this.num2 = 0;
};



module.exports = {Pinky, TheBrain, GogoDodo};