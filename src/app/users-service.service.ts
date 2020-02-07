import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, switchMap, filter } from 'rxjs/operators';

interface IUser {
  name: string;
  age: string;
  email: string;
  address: string;
  id: number
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private urlConfig: string = 'https://my-json-server.typicode.com/danill1278/jsonserver/users';

  private _users$ = new BehaviorSubject(undefined);
  public users$ = this._users$.asObservable();
  

  constructor(private http: HttpClient) { }  

  addUser(user: IUser) {
    this.http.post(this.urlConfig, user).subscribe(() => {
      this._users$.next([...(this._users$.getValue() || []), user]);
    });
  }

  deleteUser(name: number) {
    this.http.delete(`${this.urlConfig}/${1}`)
    .subscribe((users) => {  
      this._users$.next( this._users$.getValue().filter((user) =>  {
        return  user.name !== name;
      }))
    })
  }

  getUsers() {
    return !this._users$.getValue() ? this.http.get(this.urlConfig).pipe(
      tap((data) => this._users$.next(data)),
      switchMap(() => this.users$)
    ) : this.users$;
  }

}
