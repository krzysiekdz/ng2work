import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ScriptLoaderService } from '../../services/script-loader.service';


@Component({
    selector: "datatable-1",
    templateUrl: "./base-column-rendering.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class BaseColumnRenderingComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/demo/default/custom/components/datatables/base/column-rendering.js');

    }

}