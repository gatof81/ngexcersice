import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
    { path: '', component: UsersListComponent },
    { path: 'details/:id', component: UserDetailComponent },

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);