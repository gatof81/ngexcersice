import { NgModule } from '@angular/core';
import { UsersService } from '../core/services/users.service'
import { UsersListComponent } from './users-list.component';
import { routing } from './users-list.routing';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';




@NgModule({
    imports: [routing, HttpModule, CommonModule],
    declarations: [UsersListComponent, UserDetailComponent],
    providers: [UsersService],
})
export class UsersListModule { }