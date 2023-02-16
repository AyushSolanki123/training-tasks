import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  data: Employee[] = [
    {
      empId: 100,
      empName: 'Emp1',
      age: 60,
      gender: 'M',
      hobbies: ['cricket', 'football'],
      address: 'Mysore',
    },
    {
      empId: 101,
      empName: 'Emp2',
      age: 25,
      gender: 'F',
      hobbies: ['chess', 'reading'],
      address: 'Bangalore',
    },
    {
      empId: 102,
      empName: 'Emp3',
      age: 45,
      gender: 'M',
      hobbies: ['cricket', 'reading'],
      address: 'Chennai',
    },
  ];
  constructor() {}

  updateEmployee(id: number, reqBody: any): void {
    let index = this.data.findIndex((e) => e.empId === id);
    let emp = this.data[index];
    emp = Object.assign(emp, reqBody);
    this.data[index] = emp;
  }

  getEmployees(): Employee[] {
    return this.data;
  }
}

export class Employee {
  empId!: number;
  empName!: string;
  age!: number;
  gender!: string;
  hobbies!: any;
  address!: string;
}
