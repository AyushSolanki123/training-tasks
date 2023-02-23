import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../Item';
import { Store } from '@ngrx/store';
import { selectCartItem } from '../../store/selectors/cart.selectors';

@Component({
  selector: 'app-list-product-items',
  templateUrl: './list-product-items.component.html',
  styleUrls: ['./list-product-items.component.scss'],
})
export class ListProductItemsComponent implements OnInit {
  @Input() item!: Item;
  @Output() remove: EventEmitter<Item> = new EventEmitter();
  @Output() add: EventEmitter<Item> = new EventEmitter();
  quantity = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectCartItem(this.item?.id)).subscribe((value) => {
      if (value.length) {
        console.log(value);
        this.quantity = value[0].quantity;
      } else {
        this.quantity = 0;
      }
    });
  }

  removeItem() {
    if (this.quantity > 0) {
      this.quantity -= 1;
      this.remove.emit(this.item);
    }
  }

  addItem() {
    this.quantity += 1;
    this.add.emit(this.item);
  }
}
