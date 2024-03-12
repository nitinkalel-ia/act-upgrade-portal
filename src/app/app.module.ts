import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  bootstrap: []
})
export class AppModule { }
