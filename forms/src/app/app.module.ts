import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
