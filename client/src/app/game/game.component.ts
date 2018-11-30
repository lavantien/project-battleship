import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../_service/global.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isLogin = false;

  constructor(private _globalService: GlobalService) { }

  ngOnInit() {
    if (this._globalService.isLogin) {
      this.isLogin = true;
    }
  }
}
