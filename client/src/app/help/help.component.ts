import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../_service/global.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  isLogin = false;

  constructor(private _globalService: GlobalService) { }

  ngOnInit() {
    if (this._globalService.isLogin) {
      this.isLogin = true;
    }
  }
}
