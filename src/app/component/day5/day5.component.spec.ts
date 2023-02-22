import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Component } from './day5.component';
import { ListTaskItemsComponent } from '../list-task-items/list-task-items.component';
import { TaskItemComponent } from '../task-item/task-item.component';

describe('Day5Component', () => {
  let component: Day5Component;
  let fixture: ComponentFixture<Day5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day5Component, ListTaskItemsComponent, TaskItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Day5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
