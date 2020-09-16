import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomerDashboardModule} from "./customer-dashboard/customer-dashboard.module";
import { UserService } from "./others/user.service";
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    CustomerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
