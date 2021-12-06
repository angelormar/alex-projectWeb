import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';


@Directive({
  selector: '[alertOutFocus]'
})
export class AlertOutFocusDirective {
  
  @HostListener('focusout') onFocusOut() {
    if(this.value === '') {
      this.border = '1px solid red';
    }else {
      this.border = '1px solid green';
    }
    console.log(this.value);
  }

  @HostBinding('style.border') border: string = '';
  @HostBinding('value') value: any = '';


  constructor() { }

}
