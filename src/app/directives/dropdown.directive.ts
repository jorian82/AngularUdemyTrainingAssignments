import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  /********
   * Pro solution
   */
  @HostBinding('class.show') isOpen: boolean = false;

  // @HostListener('click') toggleDropdown() {
  //   this.isOpen = !this.isOpen;
  // }
  //closing the dropdown from any click event
  @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}

  /********
   * newbie approach
   */
  /*
  buttonPressed: boolean = true;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') mouseClick() {
    if(this.buttonPressed){
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
    this.buttonPressed = !this.buttonPressed;
  }
  */
}
