import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormService } from '../../../services/form.service';


declare let mApp: any;
@Component({
	selector: 'user-add',
	templateUrl: './user-add.component.html',
})
export class UserAddComponent {
	user:any={};
	model:any={ name:'', email:'', pass1:'', pass2:''};
	err:any={};
	loading=false;

	constructor(private _userService: UserService, private _router: Router, private _formService: FormService) {
		this.user=this._userService.getUserObj();
	}

	ngOnInit() {
		
		// console.log('initing company');
		// if(this.user.parent!==null) {
		// 	this._router.navigate(['']);
		// }
	}

	createUser() {
		this.err={name:'', email:'', pass1:'', pass2:'', success:'', err:false, err_create:''};
		this.err.name=this._formService.validateName(this.model.name);
		this.err.email=this._formService.validateEmail(this.model.email);
		let pass_err=this._formService.validatePass(this.model.pass1, this.model.pass2,);
		this.err.pass1=pass_err[0];
		this.err.pass2=pass_err[1];
		if(this.err.name!=='' || this.err.email!=='' || this.err.pass1!=='' || this.err.pass2!=='') this.err.err=true;
		if(!this.err.err) {
			this.loading=true;
			var self=this;
		 	this._userService.createUser(this.model.email, this.model.pass1, this.model.name, this.user.id)
				.then(function(res) {
					self.loading=false;
					(<any>mApp).scrollTop();
					if(res.err=='') {
						self.model={};
						self.err.success=true;
						setTimeout(()=> self.err.success='', 5000);
					} else {
						self.err.email='Istnieje juz użytkownik o tym adresie e-mail';
					}
			})
			.catch(function(err) {
				self.loading=false;
				(<any>mApp).scrollTop();
				self.err.err_create=true;
			});
			;
		}
	}

	

}

