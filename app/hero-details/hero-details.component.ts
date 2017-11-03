import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hero }  from '../hero';
import { HeroListComponent } from '../hero-list/hero-list.component';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

	@Input() hero:Hero;
	@Input() actionok;
  @Input() parent:HeroListComponent;//parent moglby byc okreslonego typu, bo teoretycznie kazdy moze uzywac tego komponentu, ale ten komponent
  //moze tez pobierac parent - a wiec powinien on miec okreslony interfejs

  	constructor() { }

  	ngOnInit() {
  	}

  	ok() {
  		// this.actions.unset();
      this.actionok();
      // console.log('ok', this.actionok);
      // this.parent.unselectHero();
  	}

    ngOnChanges(s) {
      // console.log(s);
    }

}

