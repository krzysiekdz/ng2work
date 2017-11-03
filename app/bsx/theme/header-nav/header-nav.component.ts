import { Component, AfterViewInit } from '@angular/core';
import { UserService } from '../../services/user.service';

declare let mLayout: any;
@Component({
	selector: 'header-nav',
	templateUrl: './header-nav.component.html',
})
export class HeaderNavComponent {

	user:any={};

	constructor(private _userService: UserService) {
		this.user=this._userService.getUserObj();
	}

	ngAfterViewInit() {

        mLayout.initHeader();

    }

}