import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionPage } from '../pages/connection/connection.page';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ConnectionService> {
  canDeactivate(
    component: ConnectionService
  ): boolean {
    if (component.isnetworkConnected === false) {
      return true;
    } else {
      return false;
    }

  }
}
