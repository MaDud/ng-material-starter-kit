import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationModel } from '../models/registration.model';

@Injectable()
export class RegistrationService {
  constructor(private _httpClient: HttpClient) {
  }

  create(data: RegistrationModel): Observable<RegistrationModel> {
    return this._httpClient.post<RegistrationModel>('https://fakestoreapi.com/users', data);
  }
}
