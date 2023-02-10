import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Task1Component } from './day2-task1.component';

describe('Day2Task1Component', () => {
  let component: Day2Task1Component;
  let fixture: ComponentFixture<Day2Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2Task1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
