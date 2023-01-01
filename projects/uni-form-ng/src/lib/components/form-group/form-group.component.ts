import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UniObject } from '../../models/interfaces/object.model';

@Component({
  selector: 'uni-form-group-ng',
  templateUrl: 'form-group.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormGroupComponent implements OnInit {

  @Input()
  url: string = '';

  @Input()
  value: UniObject = {};

  urls: string[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((urls: any) => this.urls = urls);
  }
}
