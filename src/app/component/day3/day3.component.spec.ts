import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Component } from './day3.component';
import { ListTaskItemsComponent } from '../list-task-items/list-task-items.component';
import { TaskItemComponent } from '../task-item/task-item.component';

describe('Day3Component', () => {
  let component: Day3Component;
  let fixture: ComponentFixture<Day3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day3Component, ListTaskItemsComponent, TaskItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Day3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
