import { Component, OnInit } from '@angular/core';
import { ConnectCustomerService } from '../connect-customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private objs: ConnectCustomerService) { }

  ngOnInit() {
    this.objs.storeCustomer();
  }

}
