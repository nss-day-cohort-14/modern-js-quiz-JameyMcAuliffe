"use strict";


const Character = require('./character');
const Battle = require('./battle');

//Type 2 function
function Animaniac() {
	Character.call(this);
	//random health range from 70-100
	this.health = Math.floor(Math.random() * 51) + 50;
}


//Type 2 model functions
const Yacko = function() {
	Animaniac.call(this);
	this.health += 10;
	//numbers passed into getDamage function
	this.num1 = 15;
	this.num2 = 5; 
};

const Wacko = function() {
	Animaniac.call(this);
	this.health += 15;
	//numbers passed into getDamage function
	this.num1 = 30;
	this.num2 = 0;
};

const Dot = function() {
	Animaniac.call(this);
	this.health += 20;
	//numbers passed into getDamage function
	this.num1 = 5;
	this.num2 = 10;
};




module.exports = {Yacko, Wacko, Dot};