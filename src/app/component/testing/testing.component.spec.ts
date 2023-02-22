import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should say Welcome!', () => {
    expect(component.title).toEqual('Welcome!');
  });

  it('should display message', () => {
    expect(component.show()).toBeTruthy();
  });

  it('should hide message', () => {
    expect(component.hide()).toBeFalsy();
  });

  it('Message check', () => {
    const a1 = fixture.nativeElement.querySelectorAll('div');
    console.log(a1);
  });
});
