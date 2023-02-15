import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appConfirmPasswordCheck]',
})
export class ConfirmPasswordCheckDirective implements OnChanges {
  @Input() paswordCheck!: string;
  @Input() confirmPasswordCheck!: string;
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.width = '100%';
    this.elementRef.nativeElement.style.padding = '8px';
    this.elementRef.nativeElement.style.borderRadius = '8px';
    this.elementRef.nativeElement.style.border = '2px solid black';
    this.elementRef.nativeElement.style.textAlign = 'center';
    this.elementRef.nativeElement.style.visibility = 'hidden';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.paswordCheck && this.confirmPasswordCheck) {
      this.elementRef.nativeElement.style.visibility = 'visible';
      if (this.paswordCheck === this.confirmPasswordCheck) {
        this.elementRef.nativeElement.style.backgroundColor = '#46e59b';
        this.elementRef.nativeElement.style.color = 'green';
        this.elementRef.nativeElement.innerHTML = 'Passwords Match';
      } else {
        this.elementRef.nativeElement.style.backgroundColor = '#ff828e';
        this.elementRef.nativeElement.style.color = 'red';
        this.elementRef.nativeElement.innerHTML = 'Passwords do not Match';
      }
    } else {
      this.elementRef.nativeElement.style.visibility = 'hidden';
    }
  }
}
