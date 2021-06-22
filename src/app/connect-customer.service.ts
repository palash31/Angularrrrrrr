import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
@Injectable({
  providedIn: 'root'
})
export class ConnectCustomerService {
  readonly ourURL = 'https://localhost:44380/api';
  list:Customer[];
  constructor(private objhttp: HttpClient) { }
  public storeCustomer()
  {
    this.objhttp.get(this.ourURL + '/Customers/').toPromise().then(p => this.list = p as Customer[]);
  }
}
