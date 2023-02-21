import { Component } from '@angular/core';
import { Observable, map, of, reduce } from 'rxjs';

interface Product {
  pName: string;
  price: number;
}

@Component({
  selector: 'app-day7-task1',
  templateUrl: './day7-task1.component.html',
  styleUrls: ['./day7-task1.component.scss'],
})
export class Day7Task1Component {
  products: Observable<Product> = of<Product[]>(
    { pName: 'televison', price: 17999 },
    { pName: 'air conditioner', price: 32499 },
    { pName: 'smartphone', price: 24299 },
    { pName: 'washing machine', price: 37999 },
    { pName: 'dish washer', price: 52499 }
  );
  totalPrice$!: Observable<number>;
  productName$!: Observable<string>;
  productNameList: string[] = [];

  constructor() {
    this.totalPrice$ = this.products.pipe(
      reduce((acc, itemsdet) => acc + itemsdet.price, 0)
    );

    this.productName$ = this.products.pipe(map((value) => value.pName));

    this.productName$.subscribe(
      (name) => this.productNameList.push(name),
      (error) => console.log(error),
      () => console.log('Completed')
    );
  }
}
