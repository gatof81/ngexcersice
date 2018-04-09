import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import LoginService from '../../services/login.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  subscription: any;
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;
  constructor(private loginservice: LoginService) { 
    
  }

  ngOnInit() {
    this.subscription = this.loginservice.getLoginStatusEmitter()
      .subscribe(bool => this.isLoggedIn = bool);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
    this.loginservice.emitLoginStatusChangeEvent(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.isLoggedIn = true;
    this.loginservice.emitLoginStatusChangeEvent(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
    this.loginservice.emitLoginStatusChangeEvent(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
