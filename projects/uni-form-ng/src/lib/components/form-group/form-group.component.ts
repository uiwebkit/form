import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UniObject } from '../../models/interfaces/object.model';
import { UniFormNested } from '../../models/interfaces/nested.model';
import { UniFormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'uni-form-group-ng',
  standalone: true,
  imports: [UniFormFieldComponent],
  templateUrl: 'form-group.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormGroupComponent implements OnInit {

  @Input()
  url: string = '';

  @Input()
  nested: UniObject<UniFormNested> = {};

  urls: string[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((urls: any) => this.urls = urls);
  }
}
