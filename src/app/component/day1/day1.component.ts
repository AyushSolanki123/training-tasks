import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss'],
})
export class Day1Component {
  data: Task = {
    name: 'Day 1',
    route: '/day1',
    tasks: [
      { id: 1, task: 'Data Binding', route: '/day1/task1' },
      { id: 2, task: 'Event Binding', route: '/day1/task2' },
    ],
  };
}
