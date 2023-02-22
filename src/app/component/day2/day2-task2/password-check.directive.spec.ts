import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Day2Task2Component } from './day2-task2.component';
import { PasswordCheckDirective } from './password-check.directive';

describe('PasswordCheckDirective', () => {
  let component: Day2Task2Component;
  let fixture: ComponentFixture<Day2Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day2Task2Component, PasswordCheckDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(Day2Task2Component);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new PasswordCheckDirective(
      fixture.nativeElement.querySelector('#password-directive')
    );
    expect(directive).toBeTruthy();
  });
});
