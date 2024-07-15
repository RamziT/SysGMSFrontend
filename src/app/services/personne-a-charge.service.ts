import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneAChargeService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getPersonnesACharge(): Observable<any> {
    return this.http.get(`${this.apiUrl}/personnes-a-charge`);
  }
}
