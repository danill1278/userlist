import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, tap, take, map } from 'rxjs/operators';

import { UsersService } from './users-service.service';
import { Observable, empty } from 'rxjs';

interface IUser {
  name: string;
  age: string;
  email: string;
  address: string;
  id?: number
}

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class UsersResolverService implements Resolve<IUser[]> {

  constructor(private readonly usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> {
    return this.usersService.getUsers().pipe(
      catchError((error) => {
        return empty();
      }),
      take(1))      
  }
}