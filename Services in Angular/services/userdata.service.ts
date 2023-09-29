import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  userData()
  {
    return(
      [
        {name:'Akash',email:'akash@tes.com',phone:'777'},
        {name:'Rahul',email:'Rahul@tes.com',phone:'888'},
    
        {name:'Amit',email:'amit@tes.com',phone:'731'},
        {name:'Kevin',email:'kevin@tes.com',phone:'127'}
      ]
    )
  }
}
