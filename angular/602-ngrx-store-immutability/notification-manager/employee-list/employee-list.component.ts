import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  ackEmployee,
  getCurrentEmployees,
  getNewEmployees
} from '../../employees.state';
import { AppState } from '../../state';

/*
  Components now pass and receive information between itself
  and the store
*/
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  curEmployees: Observable<string[]>;
  newEmployees: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.curEmployees = store.pipe(select(getCurrentEmployees));
    this.newEmployees = store.pipe(select(getNewEmployees));
  }

  ackEmp(employee: string) {
    this.store.dispatch(ackEmployee({ employee }));
  }
}
