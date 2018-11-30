import { Component, OnInit } from '@angular/core';
import { GlobalService } from './_service/global.service';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <img width="120" src="../assets/images/tienthai.PNG">
      <div>Welcome, {{username}}</div><hr />
      <button routerLink="/" routerLinkActive="active">Arena</button>&nbsp;
      <button routerLink="/help" routerLinkActive="active">Help</button>&nbsp;
      <button routerLink="/list-users" routerLinkActive="active">List Users</button>&nbsp;
      <button routerLink="/login" routerLinkActive="active">Login</button>&nbsp;
      <button routerLink="/register" routerLinkActive="active">Register</button>&nbsp;
      <button routerLink="/logout" routerLinkActive="active">Logout</button>&nbsp;
      <button routerLink="/about" routerLinkActive="active">About</button>
    </div><hr />
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  username: string = 'Guess';

  constructor(private _globalService: GlobalService) { }

  ngOnInit() {
    this._globalService.currentUsername.subscribe(message => this.username = message);
  }
}
