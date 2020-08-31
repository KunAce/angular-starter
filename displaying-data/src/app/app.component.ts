import { Component } from '@angular/core';
import {Hero, heroes } from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // template: `
  // <h1>{{title}}</h1>
  //   <h2>My favorite hero is: {{myHero.name }}</h2>
  //   <p>Heroes:</p>
  //   <ul>
  //     <li *ngFor="let hero of heroes">
  //       {{ hero.name }}
  //     </li>
  //   </ul>
  //   <p *ngIf="heroes.length > 3 ">There are many heroes!</p>
  //   <app-click-me></app-click-me>
  //   <app-keyup></app-keyup>
  //   <app-loop-back></app-loop-back>
  //   <app-keyup2></app-keyup2>
  //   <app-keyup3></app-keyup3>
  //   <app-keyup4></app-keyup4>
  //   <app-little-tour></app-little-tour>
  // `
})
export class AppComponent {
  // For attribute directive
  // title = 'Tour of Heroes';
  // heroes = [
  //   new Hero(1, 'Windstorm'),
  //   new Hero(13, 'Bombasto'),
  //   new Hero(15,'Magneta'),
  //   new Hero(20, 'Tornado')
  // ];
  // myHero = this.heroes[0];
  // color: string;

  // For structural directive
  heroes = heroes;
  hero = this.heroes[0]

  trackById(index: number, hero: Hero): number { return hero.id; }
}
