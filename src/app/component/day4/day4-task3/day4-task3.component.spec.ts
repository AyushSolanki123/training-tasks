import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Task3Component } from './day4-task3.component';

describe('Day4Task3Component', () => {
  let component: Day4Task3Component;
  let fixture: ComponentFixture<Day4Task3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4Task3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4Task3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
