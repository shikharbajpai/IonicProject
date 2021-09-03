import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  checkProfileName;
  localItem;
  private name = new Subject<any>();

  constructor() { }

  setName(profileName: string) {
    this.name.next({ profile: profileName });
    localStorage.setItem('ProfileName', profileName);
  }

  getName(): Observable<any> {
    return this.name.asObservable();
  }
}


