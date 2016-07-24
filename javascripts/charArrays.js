"use strict";

const Animaniacs = require('./animaniacs');
const TinyToons = require('./tinyToons');
const Wildcard = require('./wildcard');

//populating the two teams into arrays
let AnimaniacsList = [];
let TinyToonsList = [];

let yacko = new Animaniacs.Yacko();
AnimaniacsList.push(yacko);
let wacko = new Animaniacs.Wacko();
AnimaniacsList.push(wacko);
let dot = new Animaniacs.Dot();
AnimaniacsList.push(dot);
let pinky = new Wildcard.Pinky();
AnimaniacsList.push(pinky);
let brain = new Wildcard.TheBrain();
AnimaniacsList.push(brain);

let buster = new TinyToons.BusterBunny();
TinyToonsList.push(buster);
let babs = new TinyToons.BabsBunny();
TinyToonsList.push(babs);
let plucky = new TinyToons.PluckyDuck();
TinyToonsList.push(plucky);
let gogo = new Wildcard.GogoDodo();
TinyToonsList.push(gogo);

module.exports = {AnimaniacsList, TinyToonsList};