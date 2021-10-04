import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
   // NavBarComponent,
    ReactiveFormComponent,
   
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
     
      { path: '', component: ReactiveFormComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}