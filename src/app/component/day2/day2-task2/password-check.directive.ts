import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordCheck]',
})
export class PasswordCheckDirective {
  @Input() paswordCheck!: string;
  @Input() confirmPasswordCheck!: string;
  passwordStrength!: string;
  textColor!: string;
  backgroundColor!: string;

  strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  goodRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  constructor(private elementRef: ElementRef) {
    if (this.strongRegex.test(this.paswordCheck)) {
      this.passwordStrength = 'strong';
    } else if (this.strongRegex.test(this.paswordCheck)) {
      this.passwordStrength = 'good';
    } else {
      this.passwordStrength = 'weak';
    }

    this.elementRef.nativeElement.style.width = '100%';
    this.elementRef.nativeElement.style.padding = '8px';
  }
}
