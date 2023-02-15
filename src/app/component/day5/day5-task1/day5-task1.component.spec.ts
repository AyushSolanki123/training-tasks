import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Task1Component } from './day5-task1.component';

describe('Day5Task1Component', () => {
  let component: Day5Task1Component;
  let fixture: ComponentFixture<Day5Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5Task1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day5Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
