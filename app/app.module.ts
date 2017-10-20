import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { Model } from './model';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    Model,
    HeroService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
