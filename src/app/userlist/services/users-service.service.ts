import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

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

export class UsersService {
  users: IUser[];
  private urlConfig: string = 'https://my-json-server.typicode.com/danill1278/jsonserver/users';

  private _users$ = new BehaviorSubject(undefined);
  public users$ = this._users$.asObservable();

  constructor(private http: HttpClient) { } 

  

  addUser(user: IUser) {     
    let updatedUser = {...user}
    updatedUser.id = Date.now();
    
    this._users$.next([...(this._users$.getValue()), updatedUser]);      
    return updatedUser;
  }

  getUser(id: number | string) {
    const user = this._users$.getValue().find( user => user.id === id );
    return user;      
  }

  deleteUser(id: number | string) {  
    let usersListUpdated = this._users$.getValue().filter(user => user.id !== id);
    this._users$.next(usersListUpdated); 
    return this.users$;
  }

  init() {}

  getUsers() {   
    return !this._users$.getValue() ? this.http.get(this.urlConfig).pipe(
      tap((data) => this._users$.next(data)),
      switchMap(() => this.users$)
    ) : this.users$;
  }

}
