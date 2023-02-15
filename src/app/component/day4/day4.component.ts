import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.scss'],
})
export class Day4Component {
  data: Task = {
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
  };
}
