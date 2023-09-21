import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  getData()
  {
    alert("This is function called")
    return "Hi this is get data method"
  }

  getData2(name:any)
  {
    alert(name)
  }
}
