import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    LoginComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // LoginComponent,
    // ContactComponent
    CommonModule
  ]
})
export class AdminModule { }
