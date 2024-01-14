import { TestBed } from '@angular/core/testing';

import { GuardNbaGuard } from './guard-nba.guard';

describe('GuardNbaGuard', () => {
  let guard: GuardNbaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardNbaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
