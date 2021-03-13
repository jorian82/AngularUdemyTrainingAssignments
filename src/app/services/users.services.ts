import { Injectable, Output, EventEmitter } from '@angular/core';

import { User } from '../models/user.model';
import { StatusCounter } from "./status-counter.services";

@Injectable({providedIn: 'root'})
export class UsersService {
  @Output() onStatusChange = new EventEmitter<User[]>();
  users: User[] = [
    new User('George', 'active'),
    new User('John', 'active'),
    new User('Paul', 'inactive'),
    new User('Ringo', 'inactive')
  ];

  constructor(private statusCounter: StatusCounter) {}

  updateStatus(id: number, status: string) {
    if(this.users[id].status === 'active' && status === 'inactive') {
      this.statusCounter.addToInactive();
    }
    if(this.users[id].status === 'inactive' && status === 'active') {
      this.statusCounter.addToActive();
    }
    this.users[id].status = status;
    this.statusCounter.showDetails();
    this.onStatusChange.emit(this.users);
  }
}
