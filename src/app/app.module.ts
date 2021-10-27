import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment1/success-alert/success-alert.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';

import { StatusCounter } from './services/status-counter.services';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './assignment5/user-details/user-details.component';
import { CreateUserComponent } from './assignment5/create-user/create-user.component';
import { UserEditComponent } from './assignment5/user-edit/user-edit.component';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { ReactiveFormComponent } from './assignment6/reactive-form/reactive-form.component';
import { Assignment7Component } from './assignment7/assignment7.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HeaderComponent,
    DropdownDirective,
    UserDetailsComponent,
    UserEditComponent,
    CreateUserComponent,
    NotFoundComponent,
    Assignment6Component,
    ReactiveFormComponent,
    Assignment7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StatusCounter],
  bootstrap: [AppComponent]
})
export class AppModule { }
