import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Hero }  from '../hero';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-details-2',
  templateUrl: './hero-details-2.component.html',
})
export class HeroDetails2Component implements OnInit {
	
	@Input() hero:Hero;
	
  	constructor(private heroService: HeroService, 
  		private route: ActivatedRoute,
  		private location: Location ) { 

  	}

  	ngOnInit():void {
  		var self=this;
  		this.route.paramMap.switchMap(function(params: ParamMap) {
  			return self.heroService.getHero(+params.get('id'));
  		})
  		.subscribe(function(h) {
  			self.hero=h;
  		})
  		;
  	}

  	ok() {

  	}

  	goBack() {
  		this.location.back();
  	}

}

