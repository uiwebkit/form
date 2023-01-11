import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, zip } from 'rxjs';

import hl from 'highlight.js';

import { jsCode } from './code';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class AppCodeComponent {

  @Input()
  templateUrl: string = '';

  @Input()
  jsonUrls: string[] = [''];

  isCode: boolean = false;
  codeTooltip: string = 'View code';
  htmlString$: Observable<string> = of('');
  jsonStrings$: Observable<string[]> = of( ['']);
  tsString: string = '';

  constructor(private http: HttpClient) {
  }

  openCode(): void {
    this.isCode = !this.isCode;
    this.codeTooltip = this.isCode ? 'Hide code' : 'View code';

    this.tsString = hl.highlightAuto(jsCode).value;

    this.htmlString$ = this.http.get(this.templateUrl, { responseType: 'text' })
      .pipe(map(value => hl.highlightAuto(value).value));

    this.jsonStrings$ = zip(this.jsonUrls.map((url: string) => this.http.get(url)
      .pipe(map(value => hl.highlightAuto(JSON.stringify(value)).value))
    ));
  }
}
