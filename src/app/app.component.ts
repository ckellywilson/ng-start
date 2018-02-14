import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <h1>{{getTitle()}}</h1>
  <app-products></app-products>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  getTitle(): string {
    return this.pageTitle;
  }
}
