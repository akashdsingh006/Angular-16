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
