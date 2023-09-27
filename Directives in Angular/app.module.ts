import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {UserAuthModule} from './user-auth/user-auth.module'
import { NameComponent } from './name/name.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChildComponent } from './child/child.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe'
import {ReactiveFormsModule} from '@angular/forms';
import { RedElDirective } from './direc/red-el.directive'
@NgModule({
  declarations: [
    AppComponent,
    
    NameComponent,
         FormComponent,
         ToDoListComponent,
         ChildComponent,
         UsdInrPipe,
         RedElDirective
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
