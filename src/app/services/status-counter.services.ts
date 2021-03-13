export class StatusCounter {
  toActive : number = 0;
  toInactive : number = 0;

  addToActive() {
    this.toActive++;
  }

  addToInactive() {
    this.toInactive++;
  }

  showDetails() {
    console.log('There have been ' + this.toActive + ' changes from inactive to active');
    console.log('There have been ' + this.toInactive + ' changes from active to inactive');
  }
}
