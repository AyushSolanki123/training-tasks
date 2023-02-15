import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskItemsComponent } from './list-task-items.component';

describe('ListTaskItemsComponent', () => {
  let component: ListTaskItemsComponent;
  let fixture: ComponentFixture<ListTaskItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaskItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaskItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
