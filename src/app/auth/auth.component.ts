import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    // TODO: Change to promise once server is done
    this.pinAuthService.login(this.pin);
    this.router.navigate(['/']);
  }

  logout() {
    this.pinAuthService.logout();
  }
}
