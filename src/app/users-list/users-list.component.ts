import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../core/services/users.service'
import { User } from '../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  sub: any;
  errorMessage: any;
  userList: any = {};
  constructor(private usersService: UsersService, private router: Router) { 
    
  }

  ngOnInit() {
    this.sub = this.usersService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }

  goToUserDetails(id) {
    if(id){
      this.router.navigate(['/users/details', id]);
    }else{
      console.log(`this id is: ${id}`)
    }
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
