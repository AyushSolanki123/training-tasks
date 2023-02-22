import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Component } from './day7.component';
import { ListTaskItemsComponent } from '../list-task-items/list-task-items.component';
import { TaskItemComponent } from '../task-item/task-item.component';

describe('Day7Component', () => {
  let component: Day7Component;
  let fixture: ComponentFixture<Day7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day7Component, ListTaskItemsComponent, TaskItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Day7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
