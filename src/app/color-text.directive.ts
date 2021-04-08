import { Directive , ElementRef, HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appColorTextDirective]'
})
export class ColorTextDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;
  @Input() appColorTextDirective: string;

  @Input('appColorTextDirective') colorText: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changColorText(this.colorText || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changColorText(null);
  }

  private changColorText(color: string) {
    this.el.nativeElement.style.colorText = color;
  }

}
