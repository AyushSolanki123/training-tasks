import { Component, OnInit } from '@angular/core';
import { Employee, TaskServiceService } from './task-service.service';

@Component({
  selector: 'app-day3-task3',
  templateUrl: './day3-task3.component.html',
  styleUrls: ['./day3-task3.component.scss'],
})
export class Day3Task3Component implements OnInit {
  id!: number;
  name!: string;
  age!: number;
  employees!: Employee[];
  EmployeeService!: TaskServiceService;
  constructor() {}

  ngOnInit(): void {
    this.EmployeeService = new TaskServiceService();
    this.employees = this.EmployeeService.getEmployees();
  }

  submit() {
    this.EmployeeService.updateEmployee(this.id, {
      empName: this.name,
      age: this.age,
    });
    this.employees = this.EmployeeService.getEmployees();
  }
}
