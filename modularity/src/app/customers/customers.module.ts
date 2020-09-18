import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {CustomersRoutingModule} from "./customers-routing.module";
import {CustomersComponent} from "./customers.component";
import {CustomersDetailComponent} from "./customers-detail.component";
import {CustomersListComponent} from "./customers-list.component";
import {CustomersService} from "./customers.service";

@NgModule({
  declarations: [
    CustomersComponent, CustomersDetailComponent,
    CustomersListComponent
  ],
  imports: [
    SharedModule, CustomersRoutingModule
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
