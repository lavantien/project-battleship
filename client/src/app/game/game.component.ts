import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../_service/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isLogin = false;

  constructor(private _globalService: GlobalService,
              private _router: Router) { }

  ngOnInit() {
    if (this._globalService.isLogin) {
      this.isLogin = true;
    } else {
      this._router.navigate(['/login']);
    }
  }
}
