import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ParamMap,
  ActivatedRoute
} from '@angular/router';
import { catchError, take, map, switchMap } from 'rxjs/operators';

import { UsersService } from '../../userlist/services/users-service.service';
import { Observable, of, empty } from 'rxjs';

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
export class UserCardResolverService implements Resolve<IUser> {

  constructor(private readonly usersService: UsersService, private route: ActivatedRoute, private router: Router ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser {
    let id = route.paramMap.get('id')
    let user: any;

    try {
      user = this.usersService.getUser(id);
      console.log(user); 
      if (!user) throw new Error(`There is no User with id: ${id}`)  
    } catch (e) { 
      console.warn(e.message);         
      this.router.navigate(['/userslist']);
      user = empty();
    }
    
    return user;     
  }
}