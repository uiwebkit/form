import { Component, ElementRef, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormFieldOption } from '../../models/interfaces/form-field-option.model';
import { UniObject } from '../../models/interfaces/object.model';
import { isDefined } from '../../utils/is';
import { RxUnsubscribe } from '../../utils/rx-unsubscribe';
import { UniFormFieldService } from './form-field.service';

@Component({
  selector: 'uni-form-field-ng',
  templateUrl: 'form-field.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./indigo-pink.css'],
})
export class UniFormFieldComponent extends RxUnsubscribe implements OnInit {

  @Input()
  url: string | undefined;

  @Input()
  options: Partial<UniFormField> | undefined;

  @Input()
  nested: { values: UniObject<number | string | string[] | boolean> } | undefined;

  @HostListener('uniFormGroup') onUniFormGroup() {
    this.formGroup = (event as CustomEvent).detail;
  }

  formGroup: FormGroup;
  fields: UniFormField[] = [];

  constructor(
    private http: HttpClient,
    private elRef: ElementRef,
    private formBuilder: FormBuilder,
    private formFieldService: UniFormFieldService,
  ) {
    super();
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    if (this.url) {
      this.http.get(this.url).subscribe((field: any) => {
        field = this.enrichField(field, this.options, this.nested);
        this.fields = [field];
        this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);

        if (field.fields) {
          if (isDefined(field.value)) {
            this.loadNestedFields(field.fields);
          }

          this.formGroup.controls[field.key].valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((value: boolean) => {
              if (value) {
                this.loadNestedFields(field.fields);
              } else {
                this.fields = [field];
                this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
              }
            });
        } else if ((field.options || field.groups) && !field.multi) {
          const hasOptionsFields = field.options?.some((option: UniFormFieldOption) => option.fields);
          const hasGroupsOptionsFields = field.groups?.some((group: any) => group.options
            ?.some((option: UniFormFieldOption) => option.fields),
          );

          if (hasOptionsFields || hasGroupsOptionsFields) {
            if (isDefined(field.value)) {
              this.setSelectedOption(field, field.value);
            }

            this.formGroup.controls[field.key].valueChanges
              .pipe(takeUntil(this.destroy$))
              .subscribe((value: string) => {
                if (isDefined(value)) {
                  this.setSelectedOption(field, value);
                } else {
                  this.fields = [field];
                  this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
                }
              });
          }
        }
      });
    } else if (this.options?.type && this.options.key) {
      this.fields = [(this.options as UniFormField)];
      this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
    }
  }

  private enrichField(field: UniFormField, options: Partial<UniFormField> | undefined, nested: any = {}): UniFormField {
    if (options) {
      field = { ...field, ...options };
    } else if (nested.values && isDefined(nested.values[field.key])) {
      field.value = nested.values[field.key];
    }

    return field;
  }

  private loadNestedFields(urls: string[]): void {
    urls.forEach((url: string, index: number) => {
      this.http.get(url).subscribe((nestedField: any) => {
        this.fields[index + 1] = this.getInitializedField(this.nested?.values, nestedField);
        this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
      });
    });
  }

  private getInitializedField(values: UniObject<any> = {}, field: UniFormField): UniFormField {
    if (isDefined(values[field.key])) {
      field.value = values[field.key] as string | string[] | boolean;
    }

    return field;
  }

  private setSelectedOption(field: UniFormField, value: string): void {
    const valueOption = field.options?.filter((option: UniFormFieldOption) => option.value === value) || [];
    this.fields = [field];

    if (valueOption.length > 0 && valueOption[0].fields && valueOption[0].fields.length > 0) {
      this.loadNestedFields(valueOption[0].fields);
    } else {
      this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
    }
  }
}
