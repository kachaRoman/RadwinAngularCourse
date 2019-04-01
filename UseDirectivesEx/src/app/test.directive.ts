import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {


  @Input()
  appTest = 'red';

  @HostBinding('style.color')
  currentColor = 'black';

  @HostListener('mouseenter')
  changeColor() {
    this.currentColor = this.appTest;
  }

  @HostListener('mouseout')
  changeColorBack() {
    this.currentColor = 'black';
  }

  // element: ElementRef, renderer: Renderer2
  constructor() {
    // element.nativeElement.style.color = 'red';
    // renderer.setStyle(element.nativeElement, 'color', 'red');

    // document.getElementById('').addEventListener('mousedown', () => { })
    // renderer.listen(element.nativeElement, 'mouseenter', x => {
    //   this.currentColor = 'red';
    //   // renderer.setStyle(element.nativeElement, 'color', 'red');
    // });

    // renderer.listen(element.nativeElement, 'mouseout', x => {
    //   this.currentColor = 'black';
    //   // renderer.setStyle(element.nativeElement, 'color', 'black');
    // });

  }


}
