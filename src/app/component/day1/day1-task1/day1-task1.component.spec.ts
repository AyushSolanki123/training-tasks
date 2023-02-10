import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1Task1Component } from './day1-task1.component';

describe('Day1Task1Component', () => {
  let component: Day1Task1Component;
  let fixture: ComponentFixture<Day1Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1Task1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day1Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
