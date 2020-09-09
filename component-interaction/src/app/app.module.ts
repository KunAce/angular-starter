import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';
import { CountdownTimerComponent } from "./countdown-timer.component";
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from "./countdown-parent.component";
import {AstronautComponent} from "./astronaut.component";
import {MissionControlComponent} from "./mission-control.component";

let directives: any [] = [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
  CountdownLocalVarParentComponent,
  CountdownViewChildParentComponent,
  AstronautComponent,
  MissionControlComponent
];

let schemas: any[] = [];

// Include Countdown examples
// unless in e2e tests which they break.
if (!/e2e/.test(location.search)) {
  console.log('adding countdown timer examples');
  directives.push(CountdownLocalVarParentComponent);
  directives.push(CountdownViewChildParentComponent);
} else {
  // In e2e test use CUSTOM_ELEMENTS_SCHEMA to suppress unknown element errors
  schemas.push(CUSTOM_ELEMENTS_SCHEMA);
}

@NgModule({
  imports: [BrowserModule],
  declarations: directives,
  bootstrap: [AppComponent],
  schemas: schemas
})

export class AppModule { }
