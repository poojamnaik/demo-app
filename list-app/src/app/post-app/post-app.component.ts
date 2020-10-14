import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-post-app',
  templateUrl: './post-app.component.html',
  styleUrls: ['./post-app.component.scss']
})
export class PostAppComponent implements OnInit {

  decodedToken: any = {};
  urlparamas: any;

  constructor() { }

  ngOnInit(): void {
    let token = window['signed_request'];
    this.decodedToken = jwt_decode(token)
    this.urlparamas = window.location.search;
  }

}
