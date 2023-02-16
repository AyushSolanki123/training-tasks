import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day5-task1',
  templateUrl: './day5-task1.component.html',
  styleUrls: ['./day5-task1.component.scss'],
})
export class Day5Task1Component {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl('/day5/task1/demo');
  }
}
