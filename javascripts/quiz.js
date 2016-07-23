"use strict";

const $ = require('jquery');

//const Battle = require('./battle');


$(function() {
	//player 1 select
	$(".select-btn-1").on("click", function() {
		let fighter1 = $("#select-1").val();
		//console.log(fighter1);
		$(".player-1-name").html(fighter1);
	});


	//player 2 select
	$(".select-btn-2").on("click", function() {
		let fighter2 = $("#select-2").val();
		//console.log(fighter2);
		$(".player-2-name").html(fighter2);
	});

	//player 1 nickname event
	$("#input-1").on("keyup", function() {
		let playerNickname = $("#input-1").val();
		$(".player-1-nickname").html(playerNickname);
	});

		//player 2 nickname event
	$("#input-2").on("keyup", function() {
		let playerNickname = $("#input-2").val();
		$(".player-2-nickname").html(playerNickname);
	});

});



