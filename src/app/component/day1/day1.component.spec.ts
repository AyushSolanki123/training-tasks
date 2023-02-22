import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1Component } from './day1.component';
import { ListTaskItemsComponent } from '../list-task-items/list-task-items.component';
import { TaskItemComponent } from '../task-item/task-item.component';

describe('Day1Component', () => {
  let component: Day1Component;
  let fixture: ComponentFixture<Day1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day1Component, ListTaskItemsComponent, TaskItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Day1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
