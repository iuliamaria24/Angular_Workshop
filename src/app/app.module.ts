import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './pipes/pipes.component';
import { ConcatenateTwoStringsPipe } from './concatenate-two-strings.pipe';
import { HighlightDirective } from './highlight.directive';
import { ColorTextDirective } from './color-text.directive';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
  AppComponent,
  PipesComponent,
  ConcatenateTwoStringsPipe,
  HighlightDirective,
  ColorTextDirective,
  AccountDetailComponent,
  HomeComponent,
  
    
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
