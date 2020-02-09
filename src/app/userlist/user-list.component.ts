import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users-service.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private userList;
  constructor(private usersService: UsersService) { }

  ngOnInit() {      
    this.userList = this.usersService.getUsers();    
  }
}
