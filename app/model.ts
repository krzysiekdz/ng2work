import { Hero } from './hero';

var heroes:Hero[] = [
	{id:1, name:"John Rambo", points:100},
	{id:2, name:"Terminator", points:120},
	{id:3, name:"Robocop", points:80},
	{id:4, name:"Spiderman", points:60},
	{id:5, name:"Ninja Turtle", points:110},
	{id:6, name:"Son Goku", points:310},
	{id:7, name:"Piccollo", points:220},
	{id:8, name:"Vegeta", points:290},
	{id:9, name:"Yamsha", points:10},
];

const model = {
	heroes:heroes,
	//ustawianie innych pól
};

export class Model {
	private model=model;

	constructor() {
	}

	getHeroes(): Hero[] {
		// return this.model.heroes;
		return model.heroes;
	}

	setHeroes(h) {
		this.model.heroes = h;
	}

	sortHeroesAsc() {
		var h=model.heroes.slice(0);
		h.sort(function(a,b){return a.points-b.points;});
		model.heroes=h;
	}

	sortHeroesDesc() {
		var h=model.heroes.slice(0);
		h.sort(function(a,b){return b.points-a.points;});
		model.heroes=h;
	}

	copyHeroes() {
		var ah=[], h=model.heroes;
		for(var i in h) {
			ah.push({
				id: 100+h[i].id,
				name: 'a'+h[i].name,
				points:2*h[i].points,
			});
		}
		console.log(ah);
		model.heroes=ah;
	}

	getBestHeroes($count) {//kopiuje model, sortuje i zwraca posortowany, jednak bez zmiany modelu glownego
		var h=model.heroes.slice(0);
  		h.sort(function(a,b){return  b.points - a.points;})
  		return h.slice(0, $count);
	}
}
