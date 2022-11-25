import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  create(employee: EmployeeModel): Observable<void> {
    return this._httpClient.post<EmployeeModel>('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ =>void 0));
  }
}
