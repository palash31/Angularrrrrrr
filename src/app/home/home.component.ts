import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public obja:AppComponent,public objs:AuthService) { }

  ngOnInit() {
  }

}