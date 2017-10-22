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

// obietnice tutorial

console.log(1);
function getSomething() {
  console.log(2);
  return new Promise(function(resolve, reject) {
    console.log(3);
    window.setTimeout(function() {
      console.log(4);
      resolve('ala ma kota');
    }, 5000)
  });
}

getSomething()
// .then(function(res) {console.log(5, res); return 101;})
// .then(function(res) {console.log(6, res)})
.then(function(res) { 
  return new Promise(function(resolve, reject) {
    window.setTimeout(function(){console.log(5, res); resolve('102');} , 2000);
  }); 
})
.then(function(res) {console.log(6, res)})
;
