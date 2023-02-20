import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Task3Component } from './day6-task3.component';

describe('Day6Task3Component', () => {
  let component: Day6Task3Component;
  let fixture: ComponentFixture<Day6Task3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Task3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6Task3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
