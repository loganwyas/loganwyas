import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getEmployees(url = '/employees') {
    return this.http.get<object[]>(apiUrl + url).pipe(
      catchError(err => {
        console.error('handling error within getEmployees()', err);
        const mockEmployee = [
          { first_name: 'no employees could be loaded' }
        ];
        return of(mockEmployee);
      })
    );
  }

  poll1() {
    return interval(2000).pipe(
      map(n => (n % 2 ? '/employeesZZZ' : '/employees')),
      switchMap(subPath => this.http.get(apiUrl + subPath)),

      catchError(err => {
        console.error('handling error within poll1()', err);
        const mockEmployee = [
          { first_name: 'no employees could be loaded' }
        ];
        return of(mockEmployee);
      }),
      tap(employee => console.log('Employee arrived', employee))
    );
  }

  poll2() {
    return interval(2000).pipe(
      map(n => (n % 2 ? '/employeesZZZ' : '/employees')),
      switchMap(subPath => this.getEmployees(subPath)),
      tap(employee => console.log('Employee arrived', employee))
    );
  }
}
