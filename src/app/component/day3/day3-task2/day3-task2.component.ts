import { Component } from '@angular/core';

@Component({
  selector: 'app-day3-task2',
  templateUrl: './day3-task2.component.html',
  styleUrls: ['./day3-task2.component.scss'],
})
export class Day3Task2Component {
  username!: string;
  password!: string;
  success!: boolean;
  submit(): void {
    if (this.username == 'admin' && this.password == 'admin123') {
      this.success = true;
    } else {
      this.success = false;
    }
  }
}
