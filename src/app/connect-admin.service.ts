import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin.model';
@Injectable({
  providedIn: 'root'
})
export class ConnectAdminService {
  readonly ourURL = 'https://localhost:44380/api';
  list:Admin[];
  constructor(private objhttp: HttpClient) { }
  public storeAdmin()
  {
    this.objhttp.get(this.ourURL + '/AdminTables/').toPromise().then(p => this.list = p as Admin[]);
  }
}
