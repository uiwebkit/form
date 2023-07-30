import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html'
})
export class AppCodeComponent {

  @Input()
  templateUrl: string = '';

  @Input()
  jsonUrls: string[] = [''];

  isCode: boolean = false;
  codeTooltip: string = 'View code';

  openCode(): void {
    this.isCode = !this.isCode;
    this.codeTooltip = this.isCode ? 'Hide code' : 'View code';
  }
}
