import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDGritar]'
})
export class DGritarDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') gritar(){
    this.el.nativeElement.style.color="red";
  }

  @HostListener('mouseleave') dejarDeGritar(){
    this.el.nativeElement.style.color = null;
  }
}
