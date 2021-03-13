import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  showDetails = false;
  // isColored = false;
  // color = 'white';
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.logs.push(new Date().valueOf());
    // this.logs.push(this.logs.length);
  }

  // getColor() {
  //   if(this.logs.length > 4 )
  //     this.color = 'blue';

  //   return this.color;
  // }

}
