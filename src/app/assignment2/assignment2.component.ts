import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  username: string = '';
  isEmptyName: boolean = true;

  ngOnInit() {};

  checkUsername(event) {
    if(event.target.value!=''){
      this.isEmptyName = false;
    }
  }

  onResetPressed() {
    this.username = '';
    this.isEmptyName = true;
  }
}
