import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRoutingModule} from "./contact-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactService} from "./contact.service";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    // SharedModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ ContactService ]
})
export class ContactModule { }
