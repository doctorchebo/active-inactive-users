import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
