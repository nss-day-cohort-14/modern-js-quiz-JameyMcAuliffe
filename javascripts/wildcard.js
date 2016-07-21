"use strict";

//Type 3
const Wildcard = require('./character');

//Type 3 model functions
const Pinky = function() {
	Wildcard.call(this);
	//health 50-110
	this.health = Math.floor(Math.random() * 61) + 50;
	this.damage = Math.floor(Math.random() * 15) + 5;
};

const TheBrain = function() {
	Wildcard.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 41) + 60;
	this.damage = Math.floor(Math.random() * 5) + 10;
};

const GogoDodo = function() {
	Wildcard.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 21) + 70;
	this.damage = Math.floor(Math.random() * 30);
};

module.exports = {Pinky, TheBrain, GogoDodo};