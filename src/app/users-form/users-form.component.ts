import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { UsersService } from '../userlist/services/users-service.service';
interface IUser {
  id: number
}
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    surname: new FormControl('', 
    [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  constructor(
    private usersService: UsersService,
    private router: Router
    ) { }
  
  ngOnInit() {}

  onSubmit() {
    let user =  this.usersService.addUser(this.userForm.value);          
    this.router.navigate([`/userslist/${user.id}`]);       
  }  

  get name() {
    return this.userForm.get('name');
  }

  get surname() {
    return this.userForm.get('surname');
  }

  get email() {
    return this.userForm.get('email');
  }

  get address() {
    return this.userForm.get('address');    
  }

}
