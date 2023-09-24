import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserAuthModule} from './user-auth/user-auth.module'
import { NameComponent } from './name/name.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChildComponent } from './child/child.component'
@NgModule({
  declarations: [
    AppComponent,
    
    NameComponent,
         FormComponent,
         ToDoListComponent,
         ChildComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
