import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroListComponent} from "./heroes/hero-list.component";
import { TestComponent } from './test.component';
import { CarComponent } from './car/car.component';
import { InjectorComponent } from './injector.component';
import {Logger} from "./logger.service";
import {UserService} from "./user.service";
import {ProvidersModule} from "./providers.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    TestComponent,
    CarComponent,
    InjectorComponent,
  ],
  imports: [
    BrowserModule,
    ProvidersModule
  ],
  providers: [
    Logger,
    UserService,
  ],
  bootstrap: [AppComponent],
  exports: [ CarComponent]
})
export class AppModule { }
