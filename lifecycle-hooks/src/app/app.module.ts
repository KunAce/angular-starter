import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeekABooComponent } from './peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { SpyDirective } from './spy.directive';
import { SpyParentComponent } from './spy.component';
import { FormsModule } from "@angular/forms";
import {CounterParentComponent, MyCounterComponent} from './counter.component';
import {OnChangesComponent, OnChangesParentComponent} from './on-changes.component';
import {AfterViewComponent, AfterViewParentComponent, ChildViewComponent} from './after-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    SpyDirective,
    SpyParentComponent,
    MyCounterComponent,
    CounterParentComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    ChildViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
