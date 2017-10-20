import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Model } from '../model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

	// heroes: Hero[];

  	constructor(private model: HeroService) { 
  		console.log('constructor dash');
  		// this.getBestHeroes();
  	}

  	ngOnInit() {
  		console.log('init dash');
  		// this.getBestHeroes();
  	}

    getBestHeroes() {
      return this.model.getBestHeroes(4);
    }

  	// getBestHeroes() {
  	// 	console.log('get best');
  	// 	var heroes=this.model.getHeroes().slice(0);
  	// 	heroes.sort(function(a,b){return  b.points - a.points;})
  	// 	this.heroes = heroes;
  	// }

    //jak zrobic zeby nie trzeba bylo przycisku refresh? - nalezy uzyc w widoku funkcji, a nie odwolania do tablicy - bo tablica sama z siebie
    //nie ulegnie zmianie, a uzycie funkcji powoduje odwolanie do modelu, ktory moze uledz zmianie - i wtedy nastpeuje obliczenie ewentulaengo nowego stanu
  	

}
