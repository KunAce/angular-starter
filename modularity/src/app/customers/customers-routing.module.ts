import {CustomersComponent} from "./customers.component";
import {CustomersListComponent} from "./customers-list.component";
import {CustomersDetailComponent} from "./customers-detail.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '',
  component: CustomersComponent,
  children: [
    {path: '', component: CustomersListComponent },
    {path: ':id', component: CustomersDetailComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
