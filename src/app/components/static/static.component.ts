import { Component } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
})
export class AppStaticComponent {

  selectedIndex: number = 6;

  onStepChange(event: any) {
    this.selectedIndex = event.selectedIndex;
  }
}
