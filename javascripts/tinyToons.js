"use strict";

//Type 1
const TinyToons = require('./character');

//Type 1 model functions
const BusterBunny = function() {
	TinyToons.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 41) + 60;
	this.damage = Math.floor(Math.random() * 15) + 5;
};

const BabsBunny = function() {
	TinyToons.call(this);
	//health 50-110
	this.health = Math.floor(Math.random() * 61) + 50;
	this.damage = Math.floor(Math.random() * 5) + 10;
};

const PluckyDuck = function() {
	TinyToons.call(this);
	//health 80-90
	this.health = Math.floor(Math.random() * 11) + 80;
	this.damage = Math.floor(Math.random() * 30);
};

module.exports = {BusterBunny, BabsBunny, PluckyDuck};
