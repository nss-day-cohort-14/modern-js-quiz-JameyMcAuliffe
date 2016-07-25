"use strict";

//Type 1
const Character = require('./character');

function TinyToon() {
	Character.call(this);
}

//Type 1 model functions
const BusterBunny = function() {
	TinyToon.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 41) + 60;
	this.num1 = 15;
	this.num2 = 5;
	// this.damage = Math.floor(Math.random() * 15) + 5;
};

const BabsBunny = function() {
	TinyToon.call(this);
	//health 50-110
	this.health = Math.floor(Math.random() * 61) + 50;
	this.num1 = 5;
	this.num2 = 10;
	// this.damage = Math.floor(Math.random() * 5) + 10;
};

const PluckyDuck = function() {
	TinyToon.call(this);
	//health 80-90
	this.health = Math.floor(Math.random() * 11) + 80;
	this.num1 = 30;
	this.num2 = 0;
	// this.damage = Math.floor(Math.random() * 30);
};

module.exports = {BusterBunny, BabsBunny, PluckyDuck};
