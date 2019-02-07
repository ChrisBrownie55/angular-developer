import { TestBed } from '@angular/core/testing';

import { FakeAuthService } from './fake-auth.service';

describe('FakeAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeAuthService = TestBed.get(FakeAuthService);
    expect(service).toBeTruthy();
  });
});
