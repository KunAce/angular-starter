import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup2',
  template:`
  <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class Keyup2Component {
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }

}
