import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailedComponent } from '../user-detailed/user-detailed.component';

const routes: Routes = [
    {path: 'userslist/:id', component: UserDetailedComponent },
    { path: 'userslist', component: UserListComponent}      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
