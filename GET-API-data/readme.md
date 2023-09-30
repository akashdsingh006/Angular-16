GET API data :
----------------------------------------------------
Services:

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url='https://gorest.co.in/public/v2/users'
  constructor(private http:HttpClient) { }
  userData()
  {
    return (this.http.get(this.url))
  }
}


app.module.ts
-----------------------
import {HttpClientModule} from '@angular/common/http'



Now using api data in any component:
---------------------------------------------------------
import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-blog';
  data:any;
  constructor(private userdata:UserdataService)
  {
    userdata.userData().subscribe((users)=>{
      console.log('users',users)
      this.data=users
    })
  }
}
