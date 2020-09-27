import { Component, OnInit } from '@angular/core';
import {HeroService} from "./heroes/hero.service";
import {HeroListComponent} from "./heroes/hero-list.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
}

function runTests() {

  const expectedHeroes = [{name: 'A'}, {name: 'B'}]
  const mockService = <HeroService> { getHeroes: () => expectedHeroes }

  it('should have heroes when HeroListComponent created', () => {
    // Pass the mock to the constructor as the Angular injector would
    const component = new HeroListComponent(mockService);
    expect(component.heroes.length).toEqual(expectedHeroes.length);
  });

  return testResults;
}

///////////////////////////////
// Fake Jasmine infrastructure
var testName: string;
var testResults: {pass: string; message: string}

function expect(actual: any) {
  return {
    toEqual: function (expected: any) {
      testResults = actual === expected ?
        {pass: 'passed', message: testName} :
        {pass: 'failed', message: `${testName}; expected ${actual} to equal ${expected}.`};
    }
  };
}

function it(label: string, test: () => void) {
  testName = label;
  test();
}
