import { Component, OnInit } from '@angular/core';
import { Customer, CustomersService} from "./customers.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  template:`
  <h3 highlight>Customer Detail</h3>
  <div *ngIf="customer">
    <div>Id: {{customer.id}}</div><br>
    <label>Name:
      <input [(ngModel)]="customer.name">
    </label>
  </div>
  <br>
  <a routerLink="../">Customer List</a>`
})

export class CustomersDetailComponent implements OnInit {
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomersService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.customerService.getCustomer(id).subscribe(customer =>
    this.customer = customer);
  }
}