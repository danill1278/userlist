import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList$: Observable<any>;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.userList$ = this.usersService.getUsers();    
  }
}
