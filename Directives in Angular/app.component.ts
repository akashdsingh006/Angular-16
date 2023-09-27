import { Component } from '@angular/core';

import{FormControl,FormGroup,Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi This is my Webpage made with Love';

  
  userDetails=[
    {name:'Akash',email:'akash@test.com'},
    {name:'Rahul',email:'rahul@test.com'},
    {name:'Manan',email:'manan@test.com'},
    {name:'Sanjeev',email:'sanjeev@test.com'}
  ]

  // updateData(item:any)
  // {
  //   console.log(item)
  // }

  // input_value:any;

  // date=Date()

  loginForm =new FormGroup({
    username :new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  loginUser()
  {
    console.log(this.loginForm.value)
  }

  get username()
  {
    return this.loginForm.get('username')
  }
  get password()
  {
    return this.loginForm.get('password')
  }
}
