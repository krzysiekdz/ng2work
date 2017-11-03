import { Component, AfterViewInit } from '@angular/core';
import { UserService } from '../../services/user.service';

declare let mLayout: any;
@Component({
	selector: 'aside-nav',
	templateUrl: './aside-nav.component.html',
})
export class AsideNavComponent {

	user:any={};

	constructor(private _userService: UserService) {
		this.user=this._userService.getUserObj();
	}

	ngAfterViewInit() {
        mLayout.initAside();
        let menu = (<any>$('#m_aside_left')).mMenu(); let item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item'); (<any>$(menu).data('menu')).setActiveItem(item);
    }
}