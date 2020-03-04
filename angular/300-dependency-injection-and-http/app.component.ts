import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

const apiUrl = '/api';

// Or connect to the hosted demo API (works from StackBlitz):
// const apiUrl = 'https://api.angularbootcamp.com';

interface Employee {
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employees: Employee[] = [];

  constructor(http: HttpClient) {
    http
      .get<Employee[]>(apiUrl + '/employees')
      .subscribe(employees => (this.employees = employees));
  }
}
