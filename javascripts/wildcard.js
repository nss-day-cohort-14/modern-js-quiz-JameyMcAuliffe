"use strict";

const Character = require('./character');

//Type 3 function
function Wildcard() {
	Character.call(this);
}

//Type 3 model functions
const Pinky = function() {
	Character.call(this);
	//health 50-110
	this.health = Math.floor(Math.random() * 61) + 50;
	this.num1 = 15;
	this.num2 = 5;
	// this.damage = Math.floor(Math.random() * 15) + 5;
};

const TheBrain = function() {
	Character.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 41) + 60;
	this.num1 = 5;
	this.num2 = 10;
	// this.damage = Math.floor(Math.random() * 5) + 10;
};

const GogoDodo = function() {
	Character.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 21) + 70;
	this.num1 = 30;
	this.num2 = 0;
	// this.damage = Math.floor(Math.random() * 30);
};



module.exports = {Pinky, TheBrain, GogoDodo};