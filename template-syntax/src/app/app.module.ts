import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BigHeroDetailComponent, HeroDetailComponent} from './hero-detail.component';
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ClickDirective,
    BigHeroDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
