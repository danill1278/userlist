import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule }   from '@angular/forms';
import { UsersFormComponent } from './users-form/users-form.component';
import { UserListComponent } from './userlist/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserlistModule } from './userlist/userlist.module';
import { UserDetailedComponent } from './user-detailed/user-detailed.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserlistModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UsersFormComponent,
    UserListComponent,
    UserDetailedComponent,
    UserCardComponent    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
