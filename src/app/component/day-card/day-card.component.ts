import { Component, Input } from '@angular/core';
import { Task } from '../Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent {
  @Input() task!: Task;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl(this.task.route);
  }
}
