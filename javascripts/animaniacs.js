"use strict";

//Type 2
const Animaniacs = require('./character');

//Type 2 model functions
const Yacko = function() {
	Animaniacs.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 41) + 60; 
};

const Wacko = function() {
	Animaniacs.call(this);
	//health 50-110
	this.health = Math.floor(Math.random() * 61) + 50;
};

const Dot = function() {
	Animaniacs.call(this);
	//health 80-90
	this.health = Math.floor(Math.random() * 11) + 80;
};

module.exports = {Yacko, Wacko, Dot};