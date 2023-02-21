import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-day3-task1',
  templateUrl: './day3-task1.component.html',
  styleUrls: ['./day3-task1.component.scss'],
})
export class Day3Task1Component implements OnInit {
  registerForm!: FormGroup;
  isSubmit = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: [],
      }),
    });
  }

  get fName() {
    return this.registerForm.get('fName')?.value;
  }
  get lName() {
    return this.registerForm.get('lName')?.value;
  }
  get address() {
    return this.registerForm.get('address')?.value;
  }
}
