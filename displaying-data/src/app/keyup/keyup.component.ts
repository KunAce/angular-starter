import { Component} from '@angular/core';

@Component({
  selector: 'app-keyup',
  template:`
  <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyupComponent {
  values ='';

  onKey(event: KeyboardEvent) { // without type info
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }

}
