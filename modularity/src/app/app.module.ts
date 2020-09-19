import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import {GreetingModule} from "./greeting/greeting.module";
import {ContactModule} from "./contact/contact.module";

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContactModule,
    GreetingModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
