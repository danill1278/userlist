import { Component, OnInit } from '@angular/core';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(private usersService: UsersService) {}
  title = 'userlist';

  ngOnInit() {
    this.usersService.getUsers().subscribe(() => {
      
    })
  }
}
