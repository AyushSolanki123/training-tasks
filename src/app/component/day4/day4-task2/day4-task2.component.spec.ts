import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Task2Component } from './day4-task2.component';

describe('Day4Task2Component', () => {
  let component: Day4Task2Component;
  let fixture: ComponentFixture<Day4Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4Task2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
