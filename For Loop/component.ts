import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent
  {
        userDetails=[
        {name:'Akash',email:'akash@tes.com',phone:'777'},
        {name:'Rahul',email:'Rahul@tes.com',phone:'888'},
    
        {name:'Amit',email:'amit@tes.com',phone:'731'},
        {name:'Kevin',email:'kevin@tes.com',phone:'127'}
      ]
  }
