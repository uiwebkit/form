import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-static-text',
  templateUrl: './text.component.html',
})
export class AppStaticTextComponent {

  isCode: boolean = false;
  codeTooltip: string = 'View code';

  constructor(private http: HttpClient) {
  }

  test(event: Event): void {
    event.stopPropagation();
    this.isCode = !this.isCode;
    this.codeTooltip = this.isCode ? 'Hide code' : 'View code';
  }
}
