import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Component } from './day4.component';
import { ListTaskItemsComponent } from '../list-task-items/list-task-items.component';
import { TaskItemComponent } from '../task-item/task-item.component';

describe('Day4Component', () => {
  let component: Day4Component;
  let fixture: ComponentFixture<Day4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day4Component, ListTaskItemsComponent, TaskItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Day4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
