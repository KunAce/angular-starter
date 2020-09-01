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
import { HighlightDirective } from './highlight.directive';
import {FormsModule} from "@angular/forms";
import {
  ConfusedHeroComponent,
  HeroSwitchComponent,
  SadHeroComponent,
  UnknownHeroComponent
} from './hero-switch.component';
// import { HeroBirthday1Component } from './hero-birthday1/hero-birthday1.component';

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
    LittleTourComponent,
    HighlightDirective,
    HeroSwitchComponent,
    SadHeroComponent,
    ConfusedHeroComponent,
    UnknownHeroComponent,
    // HeroBirthday1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
