import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailedComponent } from '../user-detailed/user-detailed.component';
import { UsersResolverService } from './services/users-resolver.service';
import { UserCardResolverService } from '../user-detailed/services/user-detailed-resolver.service';
 
const routes: Routes = [
    {path: 'userslist/:id', component: UserDetailedComponent, resolve: {user: UserCardResolverService} },
    { path: 'userslist', component: UserListComponent, resolve:  { users: UsersResolverService }}      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
