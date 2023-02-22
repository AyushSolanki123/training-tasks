import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Component } from './day2.component';
import { ListTaskItemsComponent } from '../list-task-items/list-task-items.component';
import { TaskItemComponent } from '../task-item/task-item.component';

describe('Day2Component', () => {
  let component: Day2Component;
  let fixture: ComponentFixture<Day2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day2Component, ListTaskItemsComponent, TaskItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Day2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
