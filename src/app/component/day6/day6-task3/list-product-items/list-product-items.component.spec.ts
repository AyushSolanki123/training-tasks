import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductItemsComponent } from './list-product-items.component';

describe('ListProductItemsComponent', () => {
  let component: ListProductItemsComponent;
  let fixture: ComponentFixture<ListProductItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
