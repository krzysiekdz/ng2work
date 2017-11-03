import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import * as $ from 'jquery';

var delay=1000;

@Component({
	selector: 'branch-list',
	templateUrl: './branch-list.component.html',
})
export class BranchListComponent {
	user:any={};
	companies:any=[];
	loading:boolean=false;

	constructor(private _userService: UserService) {
		this.user=this._userService.getUserObj();
	}

	ngOnInit() {
		var self=this;
		if(!this.user.islogged) {
			console.log('user is not logged');
		} else if (!this._userService.test('admin')) {
			console.log('brak uprawnien');
		} else {
			console.log('pobieranie oddzialow');
			self.componentLoading(true);
			setTimeout(function() {
				self._userService.getCompanies()
					.then(function(res) {
						// console.log('component got comapnies list', res);
						// self.companies=res;
						// self.prepareUsers();
						self.componentLoading(false);
					})
				;
			}, delay);
			
		} 
	}

	componentLoading(enable) {
		if(enable) {
			// $('#loading_employees').attr('top', '1px');
			//tu zaczac-ustawic na srodku wczytywanie
			console.log($('#load_users').attr('top'));
			this.loading=true;	
		} else {
			this.loading=false;	
		}
		
	}

	//generowanie kolorow wyswietlania ikony z pierwsza litera imienia
	prepare() {
		var styles=['metal','primary','warning','danger','success', 'warning', 'primary', 'metal', 'success'];
		var len=styles.length;

		for(var i=0; i<this.companies.length; i++) {
			var c=this.companies[i];
			c.fillstyle='m--bg-fill-'+styles[i%len];
			c.firstLetter=c.name[0];
		}
	}
}