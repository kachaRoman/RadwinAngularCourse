import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appOnlyHebrew]'
})
export class OnlyHebrewDirective {


  @Output()
  error = new EventEmitter<string>();

  @HostBinding('class.notValid')
  isNotValid = false;

  @HostListener('keypress', ['$event'])
  onKeyPress(e: KeyboardEvent) {
    if (e.keyCode < 1488 || e.keyCode > 1514) {
      this.error.emit(e.key);
      e.preventDefault();
      this.isNotValid = true;
      setTimeout(() => {
        this.isNotValid = false;
      }, 500);
    }
  }

  constructor() {
    console.log('OnlyHebrewDirective ctor');
  }

}
