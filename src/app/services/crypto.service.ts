import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoChipModel } from '../models/crypto-chip.model';

@Injectable()
export class CryptoService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CryptoChipModel[]> {
    return this._httpClient.get<CryptoChipModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
