import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1Task2Component } from './day1-task2.component';

describe('Day1Task2Component', () => {
  let component: Day1Task2Component;
  let fixture: ComponentFixture<Day1Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1Task2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day1Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
