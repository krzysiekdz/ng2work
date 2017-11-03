import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';

declare let mApp: any;
@Component({
	selector: 'company-profile',
	templateUrl: './company-profile.component.html',
})
export class CompanyProfileComponent {
	user:any={};
	loading=false;

	constructor(private _userService: UserService, private _router: Router, private _formService: FormService) {
		this.user=this._userService.getUserObj();
	}

	ngOnInit() {
		// console.log('initing company');
		if(this.user.parent!==null) {
			this._router.navigate(['']);
		}
	}

	
}

