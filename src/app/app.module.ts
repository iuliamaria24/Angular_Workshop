import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './pipes/pipes.component';
import { ConcatenateTwoStringsPipe } from './concatenate-two-strings.pipe';
import { HighlightDirective } from './highlight.directive';
import { ColorTextDirective } from './color-text.directive';




@NgModule({
  declarations: [
  AppComponent,
  PipesComponent,
  ConcatenateTwoStringsPipe,
  HighlightDirective,
  ColorTextDirective,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
