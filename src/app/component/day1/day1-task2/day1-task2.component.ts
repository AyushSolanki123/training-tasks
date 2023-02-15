import { Component } from '@angular/core';

@Component({
  selector: 'app-day1-task2',
  templateUrl: './day1-task2.component.html',
  styleUrls: ['./day1-task2.component.scss'],
})
export class Day1Task2Component {
  username!: string;
  password!: string;
  success!: boolean;
  submit(): void {
    if (this.username == 'innovapptive' && this.password == 'innovapptive') {
      this.success = true;
    } else {
      this.success = false;
    }
  }

  reset(): void {
    this.username = '';
    this.password = '';
    this.success = false;
  }
}
