import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <img width="120" src="../assets/images/tienthai.PNG"><hr />
      <button routerLink="/" routerLinkActive="active">Home</button>&nbsp;
      <button routerLink="/login" routerLinkActive="active">Login</button>&nbsp;
      <button routerLink="/register" routerLinkActive="active">Register</button>&nbsp;
      <button routerLink="/help" routerLinkActive="active">Help</button>&nbsp;
      <button routerLink="/about" routerLinkActive="active">About</button>
    </div><hr />
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'client';
}
