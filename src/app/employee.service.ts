import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployee() {
    return [
      {
        sno: 1,
        name: 'Smit Desai',
        division: 'Genesys',
      },
      {
        sno: 2,
        name: 'John Doe',
        division: 'Devops',
      },
      {
        sno: 3,
        name: 'Matt Blanc',
        division: 'Interfaces',
      },
    ];
  }
}
