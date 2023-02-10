import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.scss'],
})
export class Day2Component {
  data: Task = {
    name: 'Day 2',
    route: '/day2',
    tasks: [
      { id: 1, task: 'Directive - ngFor', route: '/day2/task1' },
      { id: 2, task: 'Custom Directive - Data Binding', route: '/day2/task2' },
    ],
  };
}
