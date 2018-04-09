import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model'
import { map } from 'rxjs/operator/map';

@Injectable()
export class UsersService {

  private baseUrl: string;
  private _singleUser: BehaviorSubject<User>;
  private userList: Observable<User[]>
  private _userList: BehaviorSubject<User[]>;
  private usersStore: {
    users: User[]
  };
  
  constructor( private http: Http) { 
    this.baseUrl = 'https://randomuser.me/api';
    this.usersStore = { users: [] };
    this._singleUser = <BehaviorSubject<User>>new BehaviorSubject({});
    this._userList = <BehaviorSubject<User[]>>new BehaviorSubject([]);
    this.userList = this._userList.asObservable();
    this.loadAll();
  }

  getUsers() {
    return this._userList.asObservable();
  }

  getSingleUser(idx){
    //Userlist data is not persistent so it has to be loaded before accecesing user details.
    this.usersStore.users.forEach((user, index) => {
      if ((<any>user.id).value === idx) {
        this._singleUser.next(Object.assign(user))
      }
    });
    return this._singleUser.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/?results=20`).subscribe(data => {
      this.usersStore.users = JSON.parse((<any>data)._body).results;
      this._userList.next(Object.assign({}, this.usersStore).users);
      console.log(JSON.parse((<any>data)._body).results);
      console.log(this.usersStore.users);
    }, error => console.log('Could not load users.'));
  }
}
