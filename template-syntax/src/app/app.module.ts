import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BigHeroDetailComponent, HeroDetailComponent} from './hero-detail.component';
import { ClickDirective } from './click.directive';
import { SizerComponent } from './sizer.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ClickDirective,
    BigHeroDetailComponent,
    SizerComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
