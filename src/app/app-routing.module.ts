import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetails2Component } from './hero-details-2/hero-details-2.component';

const routes: Routes = [
   {
      path:'',
      redirectTo:'/dashboard',
      pathMatch: 'full',
    },
    {
      path:'heroes',
      component: HeroListComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path:'details/:id',
      component: HeroDetails2Component,
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
