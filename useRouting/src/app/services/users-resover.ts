import { UsersService } from './users.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersResolver implements Resolve<string[]> {
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : string[] | Observable<string[]> | Promise<string[]> {
        return this.userService.getAll();
    }

    constructor(private userService: UsersService) {

    }
}
