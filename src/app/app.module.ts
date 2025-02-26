import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { WeatherdatabaseComponent } from './weatherdatabase/weatherdatabase.component';


import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';


import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    WeatherdatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

   
  
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
