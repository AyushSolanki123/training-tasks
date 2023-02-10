import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: Array<Task> = [
    {
      name: 'Day 1',
      route: '/day1',
      tasks: [
        { id: 1, task: 'Data Binding', route: '/day1/task1' },
        { id: 2, task: 'Event Binding', route: '/day1/task2' },
      ],
    },
    {
      name: 'Day 2',
      route: '/day2',
      tasks: [
        { id: 1, task: 'Directive - ngFor', route: '/day2/task1' },
        {
          id: 2,
          task: 'Custom Directive - Data Binding',
          route: '/day2/task2',
        },
      ],
    },
  ];
}
