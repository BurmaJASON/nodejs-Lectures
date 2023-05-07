// const superHero = require("./super-hero.js");

// console.log(superHero.getName());
// superHero.setName("Aqua");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero.js")
// console.log(newSuperHero.getName());


const superHero = require('./super-hero');

const batman = new superHero('Batman');
console.log('Hero Name : ',batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new superHero('Superman');
console.log('Hero Name : ' ,superman.getName());
superman.setName("Clark");
console.log(superman.getName());



