import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { ForbiddenValidatorDirective } from "./shared/forbidden-name.directive";
import { UniqueAlterEgoValidatorDirective } from "./shared/alter-ego.directive";


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    IdentityRevealedValidatorDirective,
    ForbiddenValidatorDirective,
    UniqueAlterEgoValidatorDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
