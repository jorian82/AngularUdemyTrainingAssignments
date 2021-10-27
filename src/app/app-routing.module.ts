import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './assignment5/user-details/user-details.component';
import { CreateUserComponent } from './assignment5/create-user/create-user.component';
import { UserEditComponent } from './assignment5/user-edit/user-edit.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { NotFoundComponent } from "./not-found/not-found.component";
import { Assignment6Component } from "./assignment6/assignment6.component";
import { Assignment7Component } from "./assignment7/assignment7.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component },
  { path: 'assignment4', component: Assignment4Component },
  { path: 'assignment5', component: Assignment5Component },
  { path: 'assignment5/:id', component: UserDetailsComponent },
  { path: 'assignment5/:id/edit', component: UserEditComponent },
  { path: 'assignment5/create', component: CreateUserComponent },
  { path: 'assignment6', component: Assignment6Component },
  { path: 'assignment7', component: Assignment7Component },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
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
