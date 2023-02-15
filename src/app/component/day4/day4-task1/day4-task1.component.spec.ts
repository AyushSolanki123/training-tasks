import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Task1Component } from './day4-task1.component';

describe('Day4Task1Component', () => {
  let component: Day4Task1Component;
  let fixture: ComponentFixture<Day4Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4Task1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
