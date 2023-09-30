import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ContactComponent} from './contact/contact.component'


const routes: Routes = [
  {
    path:'admin/login',
    component:LoginComponent
  },
  {
    path:'admin/contact',
    component:ContactComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
