import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onPageSelected = new EventEmitter<string>();

  collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  showComponent(page: string) {
    // console.log(page);
    this.onPageSelected.emit(page);
    // console.log(this.onPageSelected);
  }

}
