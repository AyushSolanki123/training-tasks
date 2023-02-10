import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Task2Component } from './day2-task2.component';

describe('Day2Task2Component', () => {
  let component: Day2Task2Component;
  let fixture: ComponentFixture<Day2Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2Task2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
