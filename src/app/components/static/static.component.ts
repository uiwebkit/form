import { ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss'],
})
export class AppStaticComponent {

  // selectedIndex: number = 6;
  //
  // onStepChange(event: any) {
  //   this.selectedIndex = event.selectedIndex;
  // }

  isMobile: Observable<boolean>;
  opened: boolean = true;

  list = [
    { name: 'Input text' },
    { name: 'Input number' },
    { name: 'Textarea' },
    { name: 'Select' },
    { name: 'Autocomplete' },
    { name: 'Datepicker' },
    { name: 'Slider' },
    { name: 'Switch' },
    { name: 'Checkbox' },
    { name: 'Radio button' },
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, breakpointObserver: BreakpointObserver) {
    this.isMobile = breakpointObserver.observe('(max-width: 600px)')
      .pipe(map(({ matches }): boolean => matches));
  }

}
