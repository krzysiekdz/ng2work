import { Injectable } from '@angular/core';
import { Hero } from './hero';

var heroes:Hero[] = [
	{id:1, name:"Sylvester Stallone", points:100},
	{id:2, name:"Arnold Schwarzenegger", points:120},
	{id:3, name:"Superman", points:80},
	{id:4, name:"Spiderman", points:60},
	{id:5, name:"Ninja Turtle", points:110},
	{id:6, name:"Karate Kid", points:310},
	{id:7, name:"Batman", points:220},
	{id:8, name:"Predator", points:290},
	{id:9, name:"Hulk", points:10},
];

var model = {
	heroes:null,
}

//ten model zaklada modyfikowanie tablicy pierwotnej przy wykonywaniu zmian
@Injectable()
export class HeroService {
	// fetchHeroes(): Promise<Hero[]> {
	fetchHeroes():void {
		// return model.heroes;
		// return new Promise(function(resolve, reject) {
		// 	setTimeout(function() {
		// 		resolve(model.heroes);
		// 	}, 2000);
		// });
		new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(heroes);
			}, 2000);
		})
		.then(function(results) {model.heroes=results;})
		;
	}

	getHeroes() {
		return model.heroes;
	}

	setHeroes(h) {
	}

	sortHeroesAsc() {
		model.heroes.sort(function(a,b){return a.points-b.points;});
	}

	sortHeroesDesc() {
		model.heroes.sort(function(a,b){return b.points-a.points;});
	}

	copyHeroes() {
		var h=model.heroes;
		for(var i in h) {
			h[i].id=10+h[i].id;
			h[i].name='b'+h[i].name;
			h[i].points=0.5*h[i].points;
		}
	}

	getBestHeroes($count) {
		if(model.heroes===null) return [];
		var h=model.heroes.slice(0);
  		h.sort(function(a,b){return  b.points - a.points;})
  		return h.slice(0, $count);
	}

	getHero(id:number): Promise<Hero> {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(heroes[id-1]);
			}, 2000);
		});
	}

}

// obietnice tutorial

// console.log(1);
// function getSomething() {
//   console.log(2);
//   return new Promise(function(resolve, reject) {
//     console.log(3);
//     window.setTimeout(function() {
//       console.log(4);
//       resolve('ala ma kota');
//     }, 5000)
//   });
// }

// getSomething()
// .then(function(res) { 
//   return new Promise(function(resolve, reject) {
//     window.setTimeout(function(){console.log(5, res); resolve('102');} , 2000);
//   }); 
// })
// .then(function(res) {console.log(6, res)})
// ;
