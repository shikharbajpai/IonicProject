import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private item = new Subject<any>();

  constructor() { }

  setItem(numbers: number) {
    this.item.next({ count: numbers });
  }

  // clearMessage() {
  //   this.item.next();
  // }

  getItem(): Observable<any> {
    return this.item.asObservable();
  }

}
