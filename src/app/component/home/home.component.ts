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
    {
      name: 'Day 3',
      route: '/day3',
      tasks: [
        {
          id: 1,
          task: 'Reactive Forms - Employee Registration',
          route: '/day3/task1',
        },
        {
          id: 2,
          task: 'TDF - Login Form',
          route: '/day3/task2',
        },
        {
          id: 3,
          task: 'TDF - Validation',
          route: '/day3/task3',
        },
      ],
    },
    {
      name: 'Day 4',
      route: '/day4',
      tasks: [
        {
          id: 1,
          task: 'Nested Components',
          route: '/day4/task1',
        },
        {
          id: 2,
          task: 'Passing Data Between Components',
          route: '/day4/task2',
        },
        {
          id: 3,
          task: 'Parent Child Communication',
          route: '/day4/task3',
        },
      ],
    },
    {
      name: 'Day 5',
      route: '/day5',
      tasks: [
        {
          id: 1,
          task: 'Routing',
          route: '/day5/task1',
        },
      ],
    },
  ];
}
