import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanGoOut } from '../contracts/can-go-out';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanGoOut> {

  canDeactivate(component: CanGoOut, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.can) {
      return component.can();
    }

    console.log(currentRoute.url)
    return true;
  }

  constructor() { }
}
