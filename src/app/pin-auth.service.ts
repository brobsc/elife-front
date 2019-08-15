import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PinAuthService {
  PW = '11223344';

  login(pin: string) {
    if (pin === this.PW) {
      localStorage.setItem('authToken', 'temp-token');
      this.messageService.add('Logged in', 'success');
    } else {
      this.messageService.add('Wrong PIN', 'warning');
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    this.messageService.add('You have been logged out', 'info');
  }

  isLoggedIn() {
    console.log(localStorage.getItem('authToken'));
    return localStorage.getItem('authToken') !== null;
  }

  constructor(private messageService: MessageService) { }
}
