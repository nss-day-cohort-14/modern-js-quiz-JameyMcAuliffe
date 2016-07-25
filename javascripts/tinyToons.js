"use strict";

//Type 1
const Character = require('./character');

function TinyToon() {
	Character.call(this);
	//random health range from 60-110
	this.health = Math.floor(Math.random() * 41) + 70;
}

//Type 1 model functions
const BusterBunny = function() {
	TinyToon.call(this);
	this.health += 10;
	//numbers passed into getDamage function
	this.num1 = 15;
	this.num2 = 5;
};

const BabsBunny = function() {
	TinyToon.call(this);
	this.health += 20;
	//numbers passed into getDamage function
	this.num1 = 5;
	this.num2 = 10;
};

const PluckyDuck = function() {
	TinyToon.call(this);
	this.health += 15;
	//numbers passed into getDamage function
	this.num1 = 30;
	this.num2 = 0;
};

module.exports = {BusterBunny, BabsBunny, PluckyDuck};
