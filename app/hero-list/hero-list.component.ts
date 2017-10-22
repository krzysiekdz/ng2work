import { Component, OnInit, OnChanges } from '@angular/core';
import { Model } from '../model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

	  heroes;
	  selectedHero;

  	constructor(private model: HeroService) {
  		// this.heroes=this.model.getHeroes();//to jest blad-powinienem robic wszystko poprzez model.getHeroes() w widoku
  	}

  	ngOnInit() {
  	}

  	selectHero(hero):void {
  		this.selectedHero=hero;
  	}

    unselectHero():void {
      this.selectedHero=null;
    }

    sortHeroesAsc() {
      this.model.sortHeroesAsc();
      this.unselectHero();
    }

    sortHeroesDesc() {
      this.model.sortHeroesDesc();
      this.unselectHero();
    }

    copyHeroes() {
      this.model.copyHeroes();
      this.unselectHero();
    }

    ok():void {
      this.unselectHero();
    }

    ngOnChanges(s) {
      console.log(s);
    }

    //przekazac do hero-details metode unset

}
