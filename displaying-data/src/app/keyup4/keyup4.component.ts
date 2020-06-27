import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup4',
  template: `
    <input #box
           (keyup.enter)="update(box.value)"
           (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class Keyup4Component {
  value ='';
  update(value: string) {this.value = value;}
}
