import { Component, ElementRef, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormFieldOption } from '../../models/interfaces/form-field-option.model';
import { UniFormNested } from '../../models/interfaces/nested.model';
import { UniObject } from '../../models/interfaces/object.model';
import { isDefined, isObject } from '../../utils/is';
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
  nested: UniObject<UniFormNested> = {};

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
        // @TODO make with builder pattern
        field = this.enrichField(field, this.options);
        field = this.enrichField(field, this.nested[field.key]);
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
        } else if (field.options || field.groups) {
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

  private loadNestedFields(urls: string[], fieldIndex: number = 0): void {
    urls.forEach((url: string, urlIndex: number) => {
      this.http.get(url).subscribe((nestedField: any) => {
        if (fieldIndex) {
          urlIndex++;
        }

        this.fields[urlIndex + 1] = this.enrichField(nestedField, this.nested[nestedField.key]);
        this.fields = this.fields.filter(field => isObject(field));
        this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
      });
    });
  }

  // @TODO move to service
  private enrichField(field: UniFormField, options: Partial<UniFormField> | undefined): UniFormField {
    if (options) {
      field = {
        ...field,
        ...options,
      };
    }

    return field;
  }

  private setSelectedOption(field: UniFormField, value: string | number | string[] | number[]): void {
    const options = this.formFieldService.groupsToOptions(field);
    const selectedOptions = this.formFieldService.getSelectedOptions(options, value);

    this.fields = [field];

    if (selectedOptions.length > 0 && this.formFieldService.hasSelectedOptionsFields(selectedOptions)) {
      selectedOptions.forEach((option: UniFormFieldOption, index: number) => {
        this.loadNestedFields(option.fields || [], index);
      });
    } else {
      this.formFieldService.dispatch(this.elRef.nativeElement, this.fields);
    }
  }
}
