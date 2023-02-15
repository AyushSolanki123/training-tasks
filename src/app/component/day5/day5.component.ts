import { Component } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.scss'],
})
export class Day5Component {
  data: Task = {
    name: 'Day 5',
    route: '/day5',
    tasks: [
      {
        id: 1,
        task: 'Routing',
        route: '/day5/task1',
      },
    ],
  };
}
