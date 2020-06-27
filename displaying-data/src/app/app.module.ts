import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { Keyup2Component } from './keyup2/keyup2.component';
import { Keyup3Component } from './keyup3/keyup3.component';
import { Keyup4Component } from './keyup4/keyup4.component';
import { LittleTourComponent } from './little-tour/little-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    Keyup2Component,
    Keyup3Component,
    Keyup4Component,
    LittleTourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
