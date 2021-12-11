import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bank} from '../models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private API_URL = "http://localhost:8080/banks";

  constructor(private http: HttpClient) {
  }

  public getAllBanks(): Observable<Array<Bank>> {
    // Http Get localhost:8080/banks/all
    return this.http.get<Array<Bank>>(`${this.API_URL}/getAll`);
  }

  public delete(id: number) {
    return this.http.delete(`${this.API_URL}/delete/${id}`);
  }

  public add(bank: Bank) {
    return this.http.post(`${this.API_URL}/add`, bank);
  }
}
