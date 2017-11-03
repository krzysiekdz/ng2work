import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  ThemeComponent } from './bsx/theme/theme.component';
import {  AuthComponent } from './bsx/auth/auth.component';
import {  CompanyProfileComponent } from './bsx/theme/company-profile/company-profile.component';
import {  UserProfileComponent } from './bsx/theme/user-profile/user-profile.component';
import {  KeyGenerationComponent } from './bsx/theme/key-generation/key-generation.component';
import { UserListComponent } from './bsx/theme/company-profile/user-list/user-list.component';
import { UserAddComponent } from './bsx/theme/company-profile/user-add/user-add.component';
import { BranchListComponent } from './bsx/theme/company-profile/branch-list/branch-list.component';
import { BranchAddComponent } from './bsx/theme/company-profile/branch-add/branch-add.component';

const routes: Routes = [
	{ path: '', redirectTo: 'index', pathMatch: 'full' }, //przekierowanie ze sciezki '' na index
    { path: 'index', component: ThemeComponent,
		children: [
			{ path: '', redirectTo: 'user', pathMatch: 'full' },
			{ path:'user', component:UserProfileComponent},
			{ path:'company_users', component:CompanyProfileComponent,
				children: [
					{ path: '', redirectTo: 'list', pathMatch: 'full' },
					{ path: 'list', component: UserListComponent },
					{ path: 'add', component: UserAddComponent }
				]
			},
			{ path:'company_br', component:CompanyProfileComponent,
				children: [
					{ path: '', redirectTo: 'list', pathMatch: 'full' },
					{ path: 'list', component: BranchListComponent },
					{ path: 'add', component: BranchAddComponent }
				]
			},
			{path:'keygen', component:KeyGenerationComponent},
		]
	},
	{ path: 'login', component: AuthComponent},
	{ path: '**', redirectTo:'index', pathMatch:'full'  }, //kierowanie wszystkich niepasujacych adresow na index (musi to byc jako ostatnia definicja reguly)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule { }