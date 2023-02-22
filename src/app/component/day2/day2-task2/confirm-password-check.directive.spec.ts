import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmPasswordCheckDirective } from './confirm-password-check.directive';
import { Day2Task2Component } from './day2-task2.component';

describe('ConfirmPasswordCheckDirective', () => {
  let component: Day2Task2Component;
  let fixture: ComponentFixture<Day2Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day2Task2Component, ConfirmPasswordCheckDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(Day2Task2Component);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ConfirmPasswordCheckDirective(
      fixture.nativeElement.querySelector('#confirm-directive')
    );
    expect(directive).toBeTruthy();
  });
});
