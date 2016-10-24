import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ActualiteComponent } from './actualite.component';
import { ListeAmis } from './liste-amis.component';
import { ListeAmisConnect } from './liste-amis-connect.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    ListeAmis,
    ListeAmisConnect
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
