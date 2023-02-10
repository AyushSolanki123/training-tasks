import { Component, Input } from '@angular/core';
import { Task } from '../Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl(this.task.route);
  }
}
