import { Component, OnInit } from '@angular/core';
import { ConnectAdminService } from 'src/app/connect-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private objs: ConnectAdminService) { }

  ngOnInit() {
    this.objs.storeAdmin();
  }

}