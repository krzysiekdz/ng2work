import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../services/script-loader.service';
import { UserService } from '../services/user.service';

declare let mApp: any;
@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: "./theme.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit {

    constructor(private _script: ScriptLoaderService, private _router: Router, private _userService: UserService) {
        
    }

    ngOnInit() {

        var self=this;
        this._userService.getUser()
            .then(function(u) {
                if(!u.islogged) {
                    self._router.navigate(['login']);
                }
            });

            //, 'assets/app/js/dashboard.js'
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(result => {
                Helpers.setLoading(false);
            });
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                (<any>mApp).scrollTop();
                Helpers.setLoading(true);
            }
            if (route instanceof NavigationEnd) {
                Helpers.setLoading(false);
                // content m-wrapper animation
                let animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);
            }
        });
    }

}