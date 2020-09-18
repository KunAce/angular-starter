import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomerDashboardModule} from "./customer-dashboard/customer-dashboard.module";
import { GreetingComponent } from './greeting/greeting.component';
import { HighlightDirective } from './shared/highlight.directive';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailComponent } from './customers/customers-detail.component';
import { CustomersListComponent } from './customers/customers-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomerDashboardModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
