import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { PinAuthService } from '../pin-auth.service';

@Component({
  selector: 'en-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  pin = '';

  constructor(
    private pinAuthService: PinAuthService,
    private router: Router) { }

  ngOnInit() {
    if (this.pinAuthService.isLoggedIn()) {
      this.logout();
    }
  }

  login(pin: string) {
    this.pinAuthService.login(this.pin)
      .pipe(first())
      .subscribe((data) => {
        this.router.navigate(['/']);
      }, (error) => {
      });
  }

  logout() {
    this.pinAuthService.logout();
  }
}
