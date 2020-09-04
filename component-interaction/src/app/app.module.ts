import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
