import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisabledService {

  private isLoggedIn = new Subject<any>();

  constructor() {
    if (localStorage.getItem('UserDetails') !== null) {
      this.setisLoggedIn(true);
    } else {
      this.setisLoggedIn(false);
    }
  }

  setisLoggedIn(value) {
    this.isLoggedIn.next({ condition: value });
  }

  getIsLoggedIn(): Observable<any> {
    return this.isLoggedIn.asObservable();
  }
}
