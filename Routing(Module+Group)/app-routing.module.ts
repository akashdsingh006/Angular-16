import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import {AdminRoutingModule} from './admin/admin-routing.module'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'about/:id',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
