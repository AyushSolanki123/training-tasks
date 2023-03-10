import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appPasswordCheck]',
})
export class PasswordCheckDirective implements OnChanges {
  @Input() paswordCheck!: string;

  strongRegex =
    /^(.*[A-Z].*)(.*[a-z].*)(.*\d.*)(.*[_@].*)*(.*[a-z].*)*(.*\d.*)*$/;
  // strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_@])$/;
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.width = '100%';
    this.elementRef.nativeElement.style.padding = '8px';
    this.elementRef.nativeElement.style.borderRadius = '8px';
    this.elementRef.nativeElement.style.border = '2px solid black';
    this.elementRef.nativeElement.style.textAlign = 'center';
    this.elementRef.nativeElement.style.visibility = 'hidden';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.paswordCheck = changes['paswordCheck'].currentValue;
    if (this.paswordCheck) {
      this.elementRef.nativeElement.style.visibility = 'visible';
      if (this.strongRegex.test(this.paswordCheck)) {
        this.elementRef.nativeElement.style.backgroundColor = '#46e59b';
        this.elementRef.nativeElement.style.color = 'green';
        this.elementRef.nativeElement.innerHTML = 'Strong Password';
      } else {
        this.elementRef.nativeElement.style.backgroundColor = '#ff828e';
        this.elementRef.nativeElement.style.color = 'red';
        this.elementRef.nativeElement.innerHTML = 'Weak Password';
      }
    } else {
      this.elementRef.nativeElement.style.visibility = 'hidden';
    }
  }

  @HostListener('input') onInput() {
    console.log(this.paswordCheck);
  }
}
