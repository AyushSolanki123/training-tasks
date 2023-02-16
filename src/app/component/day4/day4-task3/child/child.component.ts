import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() count!: number;
  @Output() send: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count += 5;
  }

  output() {
    this.send.emit(this.count);
  }
}
