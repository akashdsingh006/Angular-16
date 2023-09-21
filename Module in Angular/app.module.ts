import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserAuthModule} from './user-auth/user-auth.module'
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NameComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
