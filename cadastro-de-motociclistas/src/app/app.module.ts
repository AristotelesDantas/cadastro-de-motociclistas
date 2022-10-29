import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtivComponent } from './ativ/ativ.component';
import { Ativ2Component } from './ativ2/ativ2.component';

@NgModule({
  declarations: [
    AppComponent,
    AtivComponent,
    Ativ2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
