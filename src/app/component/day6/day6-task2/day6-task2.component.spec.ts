import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Task2Component } from './day6-task2.component';

describe('Day6Task2Component', () => {
  let component: Day6Task2Component;
  let fixture: ComponentFixture<Day6Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Task2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
