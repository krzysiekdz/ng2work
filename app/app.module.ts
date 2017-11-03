import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ThemeComponent } from './bsx/theme/theme.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './bsx/auth/auth.component';
import { AsideNavComponent } from './bsx/theme/aside-nav/aside-nav.component';
import { Footer1Component  } from './bsx/theme/footer-1/footer-1.component';
import { HeaderNavComponent } from './bsx/theme/header-nav/header-nav.component';
import { SubheaderComponent } from './bsx/theme/subheader/subheader.component';
import { CompanyProfileComponent } from './bsx/theme/company-profile/company-profile.component';
import { UserProfileComponent } from './bsx/theme/user-profile/user-profile.component';
import { KeyGenerationComponent } from './bsx/theme/key-generation/key-generation.component';
import { UserListComponent } from './bsx/theme/company-profile/user-list/user-list.component';
import { UserAddComponent } from './bsx/theme/company-profile/user-add/user-add.component';
import { BranchListComponent } from './bsx/theme/company-profile/branch-list/branch-list.component';
import { BranchAddComponent } from './bsx/theme/company-profile/branch-add/branch-add.component';

import { AuthService } from './bsx/services/auth.service';
import { UserService } from './bsx/services/user.service';
import { FormService } from './bsx/services/form.service';
import { ScriptLoaderService } from "./bsx/services/script-loader.service";
import { GlobalErrorHandler } from "./bsx/services/error-handler.service";

// import {  Component } from './bsx/.component';



@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        AuthComponent,
        AsideNavComponent,
        Footer1Component,
        HeaderNavComponent,
        SubheaderComponent,
        CompanyProfileComponent,
        UserProfileComponent,
        KeyGenerationComponent,
        UserListComponent,
        UserAddComponent,
        BranchListComponent,
        BranchAddComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        ScriptLoaderService, 
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        AuthService,
        UserService,
        FormService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }