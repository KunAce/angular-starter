import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ItemsRoutingModule} from "./items-routing.module";
import {ItemsComponent} from "./items.component";
import {ItemsDetailComponent} from "./items-detail.component";
import {ItemsListComponent} from "./items-list.component";
import {ItemService} from "./items.service";

@NgModule({
  imports: [CommonModule, ItemsRoutingModule],
  declarations: [ ItemsComponent, ItemsDetailComponent, ItemsListComponent ],
  providers: [ ItemService ]
})
export class ItemsModule {}
