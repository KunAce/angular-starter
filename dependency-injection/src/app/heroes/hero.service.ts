import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Logger} from "../logger.service";

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class HeroService {

  constructor(private logger: Logger,
              private isAuthorized: boolean) { }

  getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
  }
}
