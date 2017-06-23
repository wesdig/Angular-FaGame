import { Component } from '@angular/core';

@Component({
  selector: 'app-fagame',
  template: `
    <app-menu></app-menu>
    <app-resource></app-resource>
    <div class="container">



      <hr>

      <app-footer></app-footer>

    </div>
  `
})
export class FagameContainer { }