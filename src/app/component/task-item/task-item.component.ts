import { Component, Input } from '@angular/core';
import { TaskItem } from '../Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: TaskItem;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl(this.task.route);
  }
}
