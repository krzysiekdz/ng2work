import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

var model = {
	heroes:[],
}

var url="http://spa.localhost/account/test";

@Injectable()
export class Hero2Service {

	private headers=new Headers({'Content-Type':'application/json', 'Set-Cookie':'', 'Cookie': 'a=1'});
	
	constructor(private http: Http) {}

	fetchHeroes():void {
		this.http.post(url, JSON.stringify({ajax:1}), {headers: this.headers })
			.toPromise()
			.then(function(res){ console.log('fetch result is:', res); });
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
				resolve([]);
			}, 2000);
		});
	}

}

