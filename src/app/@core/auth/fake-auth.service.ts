import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {
  getToken() {
    /* Could use jwt library to generate fake token */
    return 'fake-json-web-token';
  }

  isAuthenticated() {
    return true;
  }
}
