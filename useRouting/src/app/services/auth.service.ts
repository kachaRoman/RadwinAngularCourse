import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  login() {
    localStorage.setItem('access_token', 'YES');
    this.isAuthenticated$.next(true);
  }
  logout() {
    localStorage.removeItem('access_token');
    this.isAuthenticated$.next(false);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isAuthenticated$.value) {
      return true;
    } else {
      return this.router.parseUrl(`/login?message=url not allowed....`);
    }

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return null;
  }





  constructor(private router: Router) { }
}
