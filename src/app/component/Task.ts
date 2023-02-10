export class Task {
  name!: string;
  route!: string;
  tasks!: Array<TaskItem>;
}

export class TaskItem {
  id!: number;
  task!: string;
  route!: string;
}
