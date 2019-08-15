import { TestBed } from '@angular/core/testing';

import { PinAuthService } from './pin-auth.service';

describe('PinAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinAuthService = TestBed.get(PinAuthService);
    expect(service).toBeTruthy();
  });
});
