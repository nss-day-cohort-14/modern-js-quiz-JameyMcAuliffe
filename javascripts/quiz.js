"use strict";

const $ = require('jquery');


const Animaniacs = require('./animaniacs');
const TinyToons = require('./tinyToons');
const Wildcard = require('./wildcard');
const Lists = require('./charArrays');
const Battle = require('./battle');

let battle;

$(function() {
	//player 1 select
	$(".select-btn-1").on("click", function() {
		let fighter1 = $("#select-1").val();
		$(".player-1-name").html(fighter1);
		let fighter1Id = $("#select-1").children("option:selected").attr("class");
		Battle.tinyToon = Lists.TinyToonsList[fighter1Id];
		console.log(Battle.tinyToon);
	});


	//player 2 select
	$(".select-btn-2").on("click", function() {
		let fighter2 = $("#select-2").val();
		$(".player-2-name").html(fighter2);
		let fighter2Id = $("#select-2").children("option:selected").attr("class");
		Battle.animaniac = Lists.AnimaniacsList[fighter2Id];
		console.log(Battle.animaniac);
	});

	//player 1 nickname event
	$("#input-1").on("keyup", function() {
		let playerNickname = $("#input-1").val(); 
		$(".player-1-nickname").html(`"${playerNickname}"`);
	});

		//player 2 nickname event
	$("#input-2").on("keyup", function() {
		let playerNickname = $("#input-2").val();
		$(".player-2-nickname").html(`"${playerNickname}"`);
	});

	//attack event
	$(".attack-btn").on("click", function() {
		battle = new Battle();
		console.log("tinyToon damage:", battle.getDamage(Battle.tinyToon));
		console.log("animaniac damage:", battle.getDamage(Battle.animaniac));
	});

});



// console.log(Lists.AnimaniacsList);
// console.log(Lists.TinyToonsList);



