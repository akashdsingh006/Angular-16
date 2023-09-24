import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webpage';

  value=0


  operate(data:any)
  {
    if(data==="inc")
    this.value++
  else if(data==="dec")
    this.value--
  }

  

  userDetails=[
    {name:'Akash',email:'akash@test.com'},
    {name:'Rahul',email:'rahul@test.com'},
    {name:'Manan',email:'manan@test.com'},
    {name:'Sanjeev',email:'sanjeev@test.com'}
  ]

  updateData(item:any)
  {
    console.log(item)
  }
}
