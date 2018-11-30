import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../_model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: User[] = [];

  filter = {
    username: '',
    password: '',
    repassword: ''
  }

  error = {
    usernameExists: false,
    weakPassword: false,
    repasswordWrong: false
  }

  constructor(private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  onRegister() {
    for (let item of this.users) {
      if (this.filter.username === item.username) {
        this.error.usernameExists = true;
        break;
      } else if (this.filter.password.length < 6) {
        this.error.weakPassword = true;
        break;
      } else if (this.filter.repassword !== this.filter.password) {
        this.error.repasswordWrong = true;
        break;
      } else {
        const newUserDTO = {
          username: this.filter.username,
          password: this.filter.password
        }
        this._userService.createUser(newUserDTO).subscribe(data => this.users.push(data));
        this._router.navigate(['/login']);
        break;
      }
    }
  }
}
