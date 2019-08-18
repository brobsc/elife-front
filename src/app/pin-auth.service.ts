import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { MessageService } from './message.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PinAuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  login(pin: string) {
    return this.http.post<any>(environment.verifyPINUrl, { pin }, this.httpOptions)
      .pipe(map(res => {
        if (res && res.token) {
          localStorage.setItem('authToken', res.token);
          this.messageService.add(`You're logged in`, 'info');

          return res.token;
        }
      }),
        catchError((err) => {
          this.messageService.add(err.error.msg, 'warning');
          return throwError(err);
        })
      );
  }

  logout() {
    localStorage.removeItem('authToken');
    this.messageService.add('You have been logged out', 'info');
  }

  isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
  }

  constructor(private messageService: MessageService,
              private http: HttpClient) { }
}
