import { ChangeDetectorRef, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html'
})
export class AppDynamicComponent {

  isMobile: Observable<boolean>;
  opened: boolean = true;

  list = [
    { name: 'Select', link: 'select' },
    { name: 'Autocomplete', link: 'autocomplete' },
    { name: 'Switch', link: 'switch' },
    { name: 'Checkbox', link: 'checkbox' },
    { name: 'Radio button', link: 'radio' },
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, breakpointObserver: BreakpointObserver) {
    this.isMobile = breakpointObserver.observe('(max-width: 600px)')
      .pipe(map(({ matches }): boolean => matches));
  }
}
