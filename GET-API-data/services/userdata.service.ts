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
