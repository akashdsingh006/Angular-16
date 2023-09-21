import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styles: [
    `.custom{
      background-color : green;
    }`
  ]
})
export class NameComponent {
  my_data ="Hello Raja ji";
}
