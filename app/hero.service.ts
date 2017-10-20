import { Injectable } from '@angular/core';
import { Hero } from './hero';

var heroes:Hero[] = [
	{id:1, name:"John Rambo2", points:100},
	{id:2, name:"Terminator2", points:120},
	{id:3, name:"Robocop2", points:80},
	{id:4, name:"Spiderman2", points:60},
	{id:5, name:"Ninja Turtle2", points:110},
	{id:6, name:"Son Goku2", points:310},
	{id:7, name:"Piccollo2", points:220},
	{id:8, name:"Vegeta2", points:290},
	{id:9, name:"Yamsha2", points:10},
];

var model = {
	heroes:heroes,
}

//ten model zaklada modyfikowanie tablicy pierwotnej przy wykonywaniu zmian
@Injectable()
export class HeroService {
	getHeroes(): Hero[] {
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
		
	}

	getBestHeroes($count) {
		var h=model.heroes.slice(0);
  		h.sort(function(a,b){return  b.points - a.points;})
  		return h.slice(0, $count);
	}
}