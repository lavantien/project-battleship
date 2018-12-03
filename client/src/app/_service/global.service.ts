import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // Localhost Environment
  baseUrl = 'http://localhost:5000';
  // Cloud Environment
  // baseUrl = 'http://battleship-server-dev.ap-southeast-1.elasticbeanstalk.com';
  isLogin = false;
  isAdmin = false;
  private messageSource = new BehaviorSubject('Guess');
  currentUsername = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
