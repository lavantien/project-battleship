import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../_model/user';
import { Router } from '@angular/router';
import { GlobalService } from '../_service/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  users: User[] = [];
  dataRefresher: any;

  filter = {
    username: '',
    password: ''
  }

  class = {
    showDiv: ''
  }

  constructor(private _globalService: GlobalService,
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.getData();
    this.refreshData();
  }

  ngOnDestroy() {
    this.cancelPageRefresh();
  }

  getData() {
    this._userService.getUsers().toPromise().then(data => {
      this.users = data;
    }, err => {
      return false;
    });
  }

  refreshData() {
    this.dataRefresher = setInterval(() => {
      this.getData();
    }, 1000);
  }

  cancelPageRefresh() {
    if (this.dataRefresher) {
      clearInterval(this.dataRefresher);
    }
  }

  onLogin() {
    let success = false;
    for (let item of this.users) {
      if (this.filter.username === item.username && this.filter.password === item.password) {
        success = true;
        this._globalService.isLogin = true;
        this._globalService.changeMessage(item.username);
        if (item.username === 'root' || item.username === 'admin') {
          this._globalService.isAdmin = true;
        } else {
          this._globalService.isAdmin = false;
        }
        this._router.navigate(['/']);
        break;
      }
    }
    if (!success) {
      this.class.showDiv = 'show-div';
      this._globalService.isLogin = false;
      this._globalService.isAdmin = false;
      this._globalService.changeMessage('Guess');
    }
  }
}
