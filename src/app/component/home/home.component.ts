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
        { id: 1, task: 'Data Binding' },
        { id: 2, task: 'Event Binding' },
      ],
    },
    {
      name: 'Day 2',
      route: '/day2',
      tasks: [
        { id: 1, task: 'Directive - ngFor' },
        { id: 2, task: 'Custom Directive - Data Binding' },
      ],
    },
  ];
}
