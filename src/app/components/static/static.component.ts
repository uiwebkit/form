import { ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html'
})
export class AppStaticComponent {

  isMobile: Observable<boolean>;
  opened: boolean = true;

  list = [
    { name: 'Input text', link: 'text' },
    { name: 'Input number', link: 'number' },
    { name: 'Textarea', link: 'textarea' },
    { name: 'Select', link: 'select' },
    { name: 'Autocomplete', link: 'autocomplete' },
    { name: 'Datepicker', link: 'datepicker' },
    { name: 'Slider', link: 'slider' },
    { name: 'Switch', link: 'switch' },
    { name: 'Checkbox', link: 'checkbox' },
    { name: 'Radio button', link: 'radio' },
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, breakpointObserver: BreakpointObserver) {
    this.isMobile = breakpointObserver.observe('(max-width: 600px)')
      .pipe(map(({ matches }): boolean => matches));
  }
}
