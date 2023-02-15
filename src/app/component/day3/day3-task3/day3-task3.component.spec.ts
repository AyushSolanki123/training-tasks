import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Task3Component } from './day3-task3.component';

describe('Day3Task3Component', () => {
  let component: Day3Task3Component;
  let fixture: ComponentFixture<Day3Task3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Task3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3Task3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
