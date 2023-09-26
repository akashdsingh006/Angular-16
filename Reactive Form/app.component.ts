import { Component } from '@angular/core';

import{FormControl,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loginForm =new FormGroup({
    username :new FormControl(''),
    password :new FormControl('')
  })

  loginUser()
  {
    console.log(this.loginForm.value)
  }
}
