import { Component } from '@angular/core';

@Component({
  selector: 'app-day4-task3',
  templateUrl: './day4-task3.component.html',
  styleUrls: ['./day4-task3.component.scss'],
})
export class Day4Task3Component {
  count: number = 10;
  sent: boolean = false;

  output(count: number) {
    this.count = count;
  }
}
