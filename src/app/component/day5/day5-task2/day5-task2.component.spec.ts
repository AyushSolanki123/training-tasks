import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Task2Component } from './day5-task2.component';

describe('Day5Task2Component', () => {
  let component: Day5Task2Component;
  let fixture: ComponentFixture<Day5Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5Task2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day5Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
