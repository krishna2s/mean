import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KrishnaComponent } from './krishna/krishna.component';
import { AdityaComponent } from './aditya/aditya.component';

@NgModule({
  declarations: [
    AppComponent,
    KrishnaComponent,
    AdityaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
