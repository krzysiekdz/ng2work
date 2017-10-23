import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroDetails2Component } from './hero-details-2/hero-details-2.component';
import { HeroesComponent } from './heroes-component/heroes.component';
import { AComponent } from './a/a.component';
import { BcdComponent } from './bcd/bcd.component';

import { Model } from './model';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailsComponent,
    HeroesComponent,
    AComponent,
    BcdComponent,
    HeroDetails2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    Model,
    HeroService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
