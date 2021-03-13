# The Basics

Working with components

A component is a piece of code that can be reused across our app, in this way we can change the way the app works or renders and some other functionalities
To create a new component there are several ways:

- Adding a new folder in the src folder for our component
- Using the CLI to create it

The first option requires that we do all the work, creating the folder and the components ts, html and css files as well as include the import and the declaration in the app.module file to make the app aware of the new component

The second option is the easiest, using either of the following commands
```
$ ng generate component <<name>>
$ ng g c <<name>>
```
this approach creates all folders, files and adds the needed references to the app.module file to make the app aware of the new component

## Component structure

A simple component consist in 3 files a typescript file, an html file and a style file (could be css, scss, sass depending on the styling selected for the project)

### Typescript File

This file will contain the class used to define the component, the logic of the component if you like, see code:
```
1  import { Component, OnInit } from '@angular/core';
2
3  @Component({
4    selector: '<<tag name>>' or '[<<attribute name>>]' or '.<<class name>>',
5    templateUrl: './<<name>>.component.html',
6    styleUrls: ['./<<name>>.component.css']
7  })
8  export class ServersComponent implements OnInit {
9
10   constructor() { }
11
12   ngOnInit(): void {
13   }
14
15 }

```
As you can see, there are 3 important properties in the component declaration: 

- *selector:* This is the way we'll call our component when we include it from another components. Using the name alone means we'll call the component as a tag, using [] means that the component will be referenced as an attribute to any tag, using the class means that the component will be referenced as a class for any tag.
  ```
  <selector-name></selector-name>   <-- used as a tag
  <div selector-name></div>         <-- used as an attibute
  <div class="selector-name"></div> <-- used as a class
  ```
- *templateUrl:* This is the file where we define the code that will be replaced by the tag when we call teh component.
- *styleUrls:* This is an array that will contain a list of files to be used as stylesheet for our component

### HTML File

This file will be the one containing the tags to render our component, it will be the one to dictate the way the component looks like

### Style File

This file will be the one that contain all the styles and customizations for our component.
