import { OnInit} from "@angular/core";
import {Component, Input , Directive} from '@angular/core';
import {LoggerService} from "./logger.service";

let nextId = 1;

@Directive()
export class PeekABooDirective implements OnInit {
  constructor(private logger: LoggerService) {}

  // implement onInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit`); }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'peek-a-boo',
  templateUrl: '<p>Now you see my hero, {{name}}</p>',
  styleUrls: ['p {background: LightYellow; padding: 8px}']
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent extends PeekABooDirective implements
  OnInit {
  @Input() name: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    let is = this.name ? 'is':'is not';
    this.logIt(`name ${is} known at construction`);
  }

}
