import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Task1Component } from './day7-task1.component';

describe('Day7Task1Component', () => {
  let component: Day7Task1Component;
  let fixture: ComponentFixture<Day7Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Task1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day7Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
