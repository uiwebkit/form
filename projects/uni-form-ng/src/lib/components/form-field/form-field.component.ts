import { Component, ElementRef, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';

import { UniFormFieldErrors } from '../../models/interfaces/errors.model';
import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormFieldOption } from '../../models/interfaces/form-field-option.model';
import { UniFormFieldType } from '../../models/types/form-field.type';
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
  type: UniFormFieldType | undefined;

  @Input()
  key: string | undefined;

  @Input()
  label: string | undefined;

  @Input()
  value: UniObject | undefined;

  @Input()
  required: boolean | undefined;

  @Input()
  disabled: boolean | undefined;

  @Input()
  minLength: number | undefined;

  @Input()
  maxLength: number | undefined;

  @Input()
  min: number | undefined;

  @Input()
  max: number | undefined;

  @Input()
  multiple: boolean | undefined;

  @Input()
  hint: string | undefined;

  @Input()
  placeholder: string | undefined;

  @Input()
  pattern: string | undefined;

  @Input()
  errors: Partial<UniFormFieldErrors> | undefined;

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
        this.fields = [this.enrichField(field, this.value)];
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
        } else if ((field.options || field.groups) && !field.multiple) {
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
    } else if (this.type && this.key) {
      this.fields = [{
        type: this.type,
        key: this.key,
        label: this.label,
        required: this.required,
        disabled: this.disabled,
        minLength: this.minLength,
        maxLength: this.maxLength,
        min: this.min,
        max: this.max,
        placeholder: this.placeholder,
        hint: this.hint,
        pattern: this.pattern,
        errors: {
          required: this.errors?.required,
          maxLength: this.errors?.maxLength,
        }
      }];

      if (this.value) {
        this.fields[0].value = this.value[this.key] as string | string[] | boolean;
      }

      this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
    }
  }

  private enrichField(field: UniFormField, value: UniObject<any> = {}): UniFormField {
    if (this.key) {
      field.key = this.key;
    }

    if (this.type) {
      field.type = this.type;
    }

    if (this.label) {
      field.label = this.label;
    }

    if (isDefined(this.required)) {
      field.required = this.required;
    }

    if (isDefined(this.disabled)) {
      field.disabled = this.disabled;
    }

    if (isDefined(this.minLength)) {
      field.minLength = this.minLength;
    }

    if (isDefined(this.maxLength)) {
      field.maxLength = this.maxLength;
    }

    if (isDefined(this.min)) {
      field.min = this.min;
    }

    if (isDefined(this.max)) {
      field.max = this.max;
    }

    if (isDefined(this.multiple)) {
      field.multiple = this.multiple;
    }

    if (isDefined(value[field.key])) {
      field.value = value[field.key] as string | string[] | boolean;
    }

    if (isDefined(this.hint)) {
      field.hint = this.hint;
    }

    if (isDefined(this.placeholder)) {
      field.placeholder = this.placeholder;
    }

    if (isDefined(this.pattern)) {
      field.pattern= this.pattern;
    }

    if (isDefined(this.errors)) {
      field.errors = this.errors;
    }

    return field;
  }

  private loadNestedFields(urls: string[]): void {
    urls.forEach((url: string, index: number) => {
      this.http.get(url).subscribe((nestedField: any) => {
        this.fields[index + 1] = this.getInitializedField(this.value, nestedField);
        this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
      });
    });
  }

  private getInitializedField(value: UniObject<any> = {}, field: UniFormField): UniFormField {
    if (isDefined(value[field.key])) {
      field.value = value[field.key] as string | string[] | boolean;
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
