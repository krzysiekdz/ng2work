import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Helpers } from "../../helpers";

@Component({
	selector: '.m-grid.m-grid--hor.m-grid--root.m-pag',
	templateUrl: './auth.component.html',
	// encapsulation: ViewEncapsulation.None,
	styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
	model:any={email:'', password:'', remember: false, error:{email_invalid:true}};
	loading:boolean=false;

	constructor(private authService: AuthService, private _router: Router, private _userService: UserService) {
    }

    signin() {
    	this.model.error.msg='';
    	this.model.error.show_msg=true;
    	this.model.error.email_invalid=false;

    	if(this.model.email==='') {
    		this.model.error.msg='Pole  "Email" nie może być puste';
    		this.model.error.email_invalid=true;
    	}
    	else if (!this.validateEmail()) {
    		this.model.error.msg='Nieprawidłowy adres email';
    		this.model.error.email_invalid=true;
    	}
    	else if (this.model.password==='') {
    		this.model.error.msg='Pole  "Hasło" nie może być puste';
    	} else if (!this.validatePass()) {
    		this.model.error.msg='Hasło musi zawierać co najmniej 4 znaki';
    	}
    	else {
    		this.model.error.show_msg=false;
    		this.login();
    	}
    }

    checkEmail() {
    	if (!this.validateEmail()) {
    		this.model.error.email_invalid=true;
    	} else {
    		this.model.error.email_invalid=false;
    	}
    }

    login() {
    	this.loading=true;
    	var self=this;
    	this.authService.login(this.model.email, this.model.password, this.model.remember)
    		.done(function(r) {
    			r=JSON.parse(r);
    			self.loading=false;
                // console.log('abc', document.cookie);
                // console.log(document.cookie);
    			if(r.result==-2) {
    				// self.model.error.show=true;
    				// self.model.error.msg='Nieprawidłowy email lub hasło';

    				$('#error_msg_span').text('Nieprawidłowy email lub hasło');
    				$('#error_msg_div').show();
    			} else if (r.result > 0) {
                    self._userService.setUser(r.row);
    				self._router.navigate(['']);
    			}
    			
    		})
    	;
    }

    private validateEmail() {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(this.model.email);
	}

	private validatePass() {
		if(this.model.password.length < 4) return false;
		return true;
	}

	ngOnInit() {
        var self=this;
        this._userService.getUser()
            .then(function(u) {
                if(u.islogged) {
                    self._router.navigate(['']);
                } 
            });
	}


    ngAfterViewInit() {
        $('#error_msg_div button').click(function() {
            $('#error_msg_div').hide();
        });
    }

}