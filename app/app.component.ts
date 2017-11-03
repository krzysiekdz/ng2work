import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { UserService } from './bsx/services/user.service';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    app_loading=true;

    constructor(private _router: Router, private _userService: UserService) {
    }

    ngOnInit() {
        var self=this;
        this._userService.getUser()
            .then(function(u) {
                if(u.islogged) {
                    // self._router.navigate(['']);
                    self.app_loading=false;
                } else {
                    self._router.navigate(['login']);
                    self.app_loading=false;
                }
            });

        // this._router.events.subscribe((route) => {
        //     if (route instanceof NavigationStart) {
        //         self.app_loading=true;
        //     }
        //     if (route instanceof NavigationEnd) {
        //          self.app_loading=false;
        //     }
        // });
    }
}