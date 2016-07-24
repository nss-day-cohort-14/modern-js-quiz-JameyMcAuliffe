"use strict";


const Character = require('./character');

//Type 2 function
function Animaniac() {
	Character.call(this);
}


//Type 2 model functions
const Yacko = function() {
	Animaniac.call(this);
	//health 60-100
	this.health = Math.floor(Math.random() * 41) + 60; 
	this.damage = Math.floor(Math.random() * 15) + 5; 
	//AnimaniacsArray.push(Yacko);
};

const Wacko = function() {
	Animaniac.call(this);
	//health 50-110
	this.health = Math.floor(Math.random() * 61) + 50;
	this.damage = Math.floor(Math.random() * 30);
	//AnimaniacsArray.push(Wacko);
};

const Dot = function() {
	Animaniac.call(this);
	//health 80-90
	this.health = Math.floor(Math.random() * 11) + 80;
	this.damage = Math.floor(Math.random() * 5) + 10;
	//AnimaniacsArray.push(Dot);
};




module.exports = {Yacko, Wacko, Dot};