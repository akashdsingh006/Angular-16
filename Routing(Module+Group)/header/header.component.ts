import { Component } from '@angular/core';
import {AdminModule} from '../admin/admin.module'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private adminModule: AdminModule) {
   
  }
}
