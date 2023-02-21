import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Task2Component } from './day7-task2.component';

describe('Day7Task2Component', () => {
  let component: Day7Task2Component;
  let fixture: ComponentFixture<Day7Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Task2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day7Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
