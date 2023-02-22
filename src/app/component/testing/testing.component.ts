import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent {
  title!: string;
  msg!: string;
  value!: boolean;

  constructor() {
    this.title = 'Welcome!';
    this.msg = 'Hello World';
    this.value = false;
  }

  show() {
    this.value = true;
    return this.value;
  }

  hide() {
    this.value = false;
    return this.value;
  }
}
