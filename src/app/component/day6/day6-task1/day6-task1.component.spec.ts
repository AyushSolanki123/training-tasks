import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Task1Component } from './day6-task1.component';

describe('Day6Task1Component', () => {
  let component: Day6Task1Component;
  let fixture: ComponentFixture<Day6Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Task1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
