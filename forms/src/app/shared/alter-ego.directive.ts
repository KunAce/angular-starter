import {Directive, forwardRef, Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {HeroesService} from "./heroes.service";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";


@Injectable({providedIn:'root'})
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private heroesService: HeroesService) {}

  validate(ctrl : AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.heroesService.isAlterEgoTaken(ctrl.value).pipe(
      map(isTaken => (isTaken ? {uniqueAlterEgo: true}: null)),
      catchError(()=> of(null))
    );
  }
}

@Directive({
  selector: '[appUniqueAlterEgo]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueAlterEgoValidator),
      multi: true
    }
  ]
})

export class UniqueAlterEgoValidatorDirective {
  constructor(private validator: UniqueAlterEgoValidator) { }

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }

}
