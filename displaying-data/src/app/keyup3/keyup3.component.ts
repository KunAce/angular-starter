import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup3',
  template: `
  <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class Keyup3Component {
  value ='';
  onEnter(value: string) {this.value = value;}
}
