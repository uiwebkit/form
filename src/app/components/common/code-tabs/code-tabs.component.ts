import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, zip } from 'rxjs';
import hl from 'highlight.js';

import { jsCode } from '../code/code';

@Component({
  selector: 'app-code-tabs',
  templateUrl: './code-tabs.component.html'
})
export class AppCodeTabsComponent implements OnInit {

  @Input()
  templateUrl: string = '';

  @Input()
  jsonUrls: string[] = [''];

  htmlString$: Observable<string> = of('');
  jsonStrings$: Observable<string[]> = of( ['']);
  tsString: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.tsString = hl.highlight(jsCode, {language: 'javascript'}).value;

    this.htmlString$ = this.http.get(this.templateUrl, { responseType: 'text' })
      .pipe(map(value => hl.highlight(value, {language: 'html'}).value));

    this.jsonStrings$ = zip(this.jsonUrls.map((url: string) => this.http.get(url)
      .pipe(map(value => hl.highlight(JSON.stringify(value), {language: 'json'}).value))
    ));
  }
}
