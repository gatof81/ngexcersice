import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../../core/services/users.service'
import { User } from '../../core/models/user.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  user: User;
  sub: Subscription;
  id: number;
  constructor(private route: ActivatedRoute, private userService: UsersService, private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getSingleUser(this.id).subscribe(users => {
        this.user = users;
      });;
      console.log(this.user);
    });
  }

  navigateBack() {
    this.location.back(); 
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
