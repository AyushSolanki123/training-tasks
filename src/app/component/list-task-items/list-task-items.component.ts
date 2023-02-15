import { Component, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-list-task-items',
  templateUrl: './list-task-items.component.html',
  styleUrls: ['./list-task-items.component.scss'],
})
export class ListTaskItemsComponent {
  @Input() data!: Task;
}
