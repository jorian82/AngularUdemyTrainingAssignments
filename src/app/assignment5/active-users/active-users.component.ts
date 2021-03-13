import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';

import { StatusCounter } from 'src/app/services/status-counter.services';
import { UsersService } from 'src/app/services/users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: User[] = [];
  constructor(private usersService: UsersService, private statusCounter: StatusCounter) {
    this.usersService.onStatusChange.subscribe( ( users: User[] ) => this.users = users );
  }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  changeStatus(id: number) {
    // console.log("id: ", id);
    this.usersService.updateStatus(id, 'inactive');
  }

}
