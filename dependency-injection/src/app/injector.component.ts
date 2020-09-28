import {Component, Injector, OnInit} from '@angular/core';
import {Car, Engine, Tires} from "./car/car";
import {Logger} from "./logger.service";

@Component({
  selector: 'app-injector',
  template: `
  <h2>Other Injections</h2>
  <div id="'car">{{car.drive()}}</div>
  `,
  providers: [Car, Engine, Tires, Logger]
})
export class InjectorComponent implements OnInit {
  car: Car;

  constructor(private injector: Injector) { }

  ngOnInit(): void {
    this.car = this.injector.get(Car);
  }

}
