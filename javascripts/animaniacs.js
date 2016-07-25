"use strict";


const Character = require('./character');
const Battle = require('./battle');

//Type 2 function
function Animaniac() {
	Character.call(this);
}


//Type 2 model functions
const Yacko = function() {
	Animaniac.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 41) + 60;
	//numbers passed into getDamage function
	this.num1 = 15;
	this.num2 = 5; 
	//this.damage = Math.floor(Math.random() * 15) + 5; 
};

const Wacko = function() {
	Animaniac.call(this);
	//health 50-110
	this.health = Math.floor(Math.random() * 61) + 50;
	this.num1 = 30;
	this.num2 = 0;
	// this.damage = Math.floor(Math.random() * 30);
};

const Dot = function() {
	Animaniac.call(this);
	//health 80-90
	this.health = Math.floor(Math.random() * 11) + 80;
	this.num1 = 5;
	this.num2 = 10;
	// this.damage = Math.floor(Math.random() * 5) + 10;
};




module.exports = {Yacko, Wacko, Dot};