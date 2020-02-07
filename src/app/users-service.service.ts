import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

interface IUser {
  name: string;
  age: string;
  email: string;
  address: string;
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
    this.http.post(this.urlConfig, user).subscribe((value) => {
    });
  }

  deleteUser(id: number) {
    this.http.delete(`${this.urlConfig}/${id}`).subscribe((value) => {
    })
  }

  init() {}

  getUsers() {
    return !this._users$.getValue() ? this.http.get(this.urlConfig).pipe(
      tap((data) => this._users$.next(data)),
      switchMap(() => this.users$)
    ) : this.users$;
  }

}
