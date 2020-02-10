import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users-service.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
 //import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private userList;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { users: any }) => {           
      this.userList = data.users;
    });
  }

  deleteUserListener(id: number) {
    this.usersService.deleteUser(id);
  }
  
  filterUserList(name: string) {
     console.log(name);     
  }
}
