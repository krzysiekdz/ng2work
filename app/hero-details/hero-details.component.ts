import { Component, OnInit, Input } from '@angular/core';
import { Hero }  from '../hero';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

	@Input() hero:Hero;
	@Input() actions;//wypadalo by nadac wspolny typ dla model i heroservice

  	constructor() { }

  	ngOnInit() {
  	}

  	ok() {
  		this.actions.unset();
  	}

}
