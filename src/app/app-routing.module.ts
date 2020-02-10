import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';

const  appRoutes: Routes = [
    { path: '', component: UsersFormComponent },
    { path: '**', component: UsersFormComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}