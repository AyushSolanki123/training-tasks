import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.scss'],
})
export class Day6Component {
  data: Task = {
    name: 'Day 6',
    route: '/day6',
    tasks: [
      {
        id: 1,
        task: 'Store - Counter Actions',
        route: '/day6/task1',
      },
      {
        id: 2,
        task: 'Store - CRUD Actions',
        route: '/day6/task2',
      },
    ],
  };
}
