// user.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData = [
    {
      id: '1',
      username: 'Pratik',
      password: 'keluskar',
    },
    // Add more user data as needed
  ];

  getUserData(): Observable<any[]> {
    return of(this.userData);
  }
}
