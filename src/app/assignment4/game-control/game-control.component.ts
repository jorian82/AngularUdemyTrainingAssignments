import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onAddNumber = new EventEmitter<number>();
  interval;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(): void {
    this.interval = setInterval(() => {
      console.log('counter', this.counter);
      this.onAddNumber.emit(this.counter);
      this.counter++;
    }, 1000);

  }

  onStop(): void {
    // this.counter = 0;
    clearInterval(this.interval);
  }

}
