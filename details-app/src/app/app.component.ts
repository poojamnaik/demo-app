import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'details-app';
  appSecret: string = '08f9e0276de9d4853a37140308a29f26'
  constructor(){}

  ngOnInit(): void {
  }
}
