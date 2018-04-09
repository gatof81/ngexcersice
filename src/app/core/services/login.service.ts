import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export default class LoginService {
    private status: boolean=false;
    private userLogin: EventEmitter<boolean> = new EventEmitter();
    constructor() { }
    emitLoginStatusChangeEvent(status) {
        this.status = status;
        this.userLogin.emit(this.status);
    }
    getLoginStatusEmitter() {
        return this.userLogin;
    }
}