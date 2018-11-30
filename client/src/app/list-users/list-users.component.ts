import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../_model/user';
import { GlobalService } from '../_service/global.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  isLogin = false;

  constructor(private _globalService: GlobalService,
              private _userService: UserService) { }

  ngOnInit() {
    if (this._globalService.isLogin && this._globalService.isAdmin) {
      this._userService.getUsers().subscribe(data => {
        this.users = data;
      });
      this.isLogin = true;
    }
  }

}
