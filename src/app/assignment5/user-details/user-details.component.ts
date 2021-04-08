import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/services/users.services';

import { Subscription } from 'rxjs';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  userId;
  userList;
  user;
  paramsSubscription: Subscription;

  constructor( private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id']; //The snapshot is to load the url parameters when the component is loaded for the first time, if a reload comes to the same path the snapshot will keep the values because the component was not re created/instanciated, for those cases we use observables
    this.userList = this.usersService.users;
    this.populateUser(this.userId, this.userList);

    this.paramsSubscription = this.route.params.subscribe( (params: Params ) => { //subscribe is the observable we need when the parameters change but the component does not change
      this.populateUser( params['id'], this.userList );
    });
  }

  populateUser( id: any, list: User[]) {
    console.log('loading new id', id);
    if( id == isNaN || id > list.length) {
      this.user = {
        name: 'Unknown',
        status: 'Unknown'
      }
    } else {
      this.user = list[id-1];
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe(); //Best practices, regularly Angular takes care of all our subscriptions and when a component is destroyed all of them are deleted too, but having them destroyed is the way to go
  }

}
