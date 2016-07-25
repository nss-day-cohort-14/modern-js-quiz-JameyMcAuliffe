"use strict";


const Battle = function() {

	this.getDamage = function(character) {
		//returns a random damage amount based off the num1/num2 values of the chosen fighters
		return Math.floor(Math.random() * character.num1) + character.num2;
	};

	this.fight = function(tinyToon, animaniac) {
		let results = [];
		results.push(tinyToon.health -= this.getDamage(animaniac));
		results.push(animaniac.health -= this.getDamage(tinyToon));
		console.log("tinyTunes health:", results[0], "animaniacs health:", results[1]);
		if(results[0] <= 0 && results[1] >= 1) {
			console.log("Animaniacs win");
		}
		else if(results[1] <= 0 && results[0] >= 1) {
			console.log("Tiny Tunes win");
		}
		else if(results[0] <= 0 && results[1] <= 0) {
			if(results[0] < results[1]) {
				console.log("Animaniacs win");
			}
			else {
				console.log("Tiny Tunes win");
			}
		}
	};
};

module.exports = Battle;