import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


import { UsersService } from '../userlist/services/users-service.service';

@Component({
  selector: 'app-user-detailed',
  templateUrl: './user-detailed.component.html',
  styleUrls: ['./user-detailed.component.scss']
})

export class UserDetailedComponent implements OnInit {
  userDetails: any;
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private userService: UsersService
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.userDetails = this.userService.getUser(+params.get('id'));      
    });
  }

  deleteUser() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.userService.deleteUser(+params.get('id')))
    ).subscribe((value) => {
      console.log('redirect here');
           
      this.router.navigate(['/userslist']);
    })
  }
}
