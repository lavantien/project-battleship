import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../_service/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _globalService: GlobalService,
              private _router: Router) { }

  ngOnInit() {
    this._globalService.isLogin = false;
    this._globalService.isLogin = false;
    this._globalService.changeMessage('Guess');
    this._router.navigate(['/login']);
  }

}
