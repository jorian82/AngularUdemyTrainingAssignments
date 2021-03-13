import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

import { UsersService } from '../../services/users.services';
import { StatusCounter } from '../../services/status-counter.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: User[] = [];
  constructor(private usersService: UsersService, private statusCounter: StatusCounter) {
    this.usersService.onStatusChange.subscribe( ( users: User[] ) => this.users = users );
  }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  changeStatus(id: number) {
    this.usersService.updateStatus(id, 'active');
  }

}
