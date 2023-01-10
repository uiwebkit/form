import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  tabs = [
    { name: 'Getting started', link: 'start' },
    { name: 'Static fields', link: 'static' },
    { name: 'Dynamic fields', link: 'dynamic' },
    { name: 'Custom forms', link: 'custom' },
  ];
}
