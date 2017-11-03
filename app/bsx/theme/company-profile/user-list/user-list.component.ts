import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import * as $ from 'jquery';

var delay=1000;

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
})
export class UserListComponent {

	user:any={};
	users:any=[];
	loading:boolean=false;

	constructor(private _userService: UserService) {
		this.user=this._userService.getUserObj();
	}

	ngOnInit() {
		// console.log('users list component, parent user id:', this.user.id);
		// this.hideTooltip();
		var self=this;
		if(this.user.id==0) {
			console.log('user is not logged');
		} else if(!this._userService.usersLoaded()) {
			// console.log('pobieranie uzytkownikow');
			self.componentLoading(true);
			setTimeout(function() {
				self._userService.getUsers(self.user.id)
					.then(function(res) {
						// console.log('component got users list', res);
						self.users=res;
						self.prepareUsers();
						self.componentLoading(false);
					})
				;
			}, delay);
			
		} else {
			this.users=this._userService.getUsersObj();
		}
	}

	refresh() {
		var self=this;
		self.componentLoading(true);
		setTimeout(function() {
			self._userService.getUsers(self.user.id)
				.then(function(res) {
					self.users=res;
					self.prepareUsers();
					self.componentLoading(false);
				})
			;
		}, delay);
		
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
	prepareUsers() {
		var styles=['metal','primary','warning','danger','success', 'warning', 'primary', 'metal', 'success'];
		var len=styles.length;

		for(var i=0; i<this.users.length; i++) {
			var u=this.users[i];
			u.fillstyle='m--bg-fill-'+styles[i%len];
			u.firstLetter=u.name[0];
		}
	}

}