/**
 * A component is an exported class
 * it also requires tags and imports to tell angular what kind of class it is
 */
import { Component } from "@angular/core";

@Component({
  selector: 'app-server', //this tells the component what tag will be replaced by the component
  // selector: '[app-server]', //by using this notation we define the component to be addressed as an attribute
  // selector: '.app-server', //by using this notation wedefine the component as a class
  templateUrl: './server.component.html', //here we define the file or code that will contain the code to replace the tag with
  styleUrls: ['./server.component.css'] //This file will contain the styling for the component
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
