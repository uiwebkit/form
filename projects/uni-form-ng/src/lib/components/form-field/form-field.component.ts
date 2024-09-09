import {
  Component,
  effect,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntil } from 'rxjs';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormFieldOption } from '../../models/interfaces/form-field-option.model';
import { UniFormNested } from '../../models/interfaces/nested.model';
import { UniObject } from '../../models/interfaces/object.model';
import { isDefined, isObject } from '../../utils/is';
import { RxUnsubscribe } from '../../utils/rx-unsubscribe';
import { UniFormFieldsMatComponent } from '../form-fields/mat/form-fields-mat.component';
import { UniFormFieldService } from './form-field.service';

@Component({
  selector: 'uni-form-field-ng',
  standalone: true,
  imports: [ReactiveFormsModule, UniFormFieldsMatComponent],
  templateUrl: 'form-field.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldComponent extends RxUnsubscribe implements OnInit, OnChanges, OnDestroy {
  @Input()
  url: string | undefined;

  @Input()
  options: Partial<UniFormField> | undefined;

  @Input()
  inline: boolean = false;

  @Input()
  hasPrefix: boolean = false;

  @Input()
  hasSuffix: boolean = false;

  @Input()
  nested: UniObject<UniFormNested> = {};

  // @HostListener('uniFormGroup') onUniFormGroup() {
  //   this.formGroup = (event as CustomEvent).detail;
  // }

  formGroup: FormGroup;
  fields: UniFormField[] = [];

  showFields: UniFormField[] = [];
  onFields: string[] = [];
  subsFields: string[] = [];

  showFieldsSignal = signal<any[]>([]);

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private formFieldService: UniFormFieldService
  ) {
    super();
    this.formGroup = this.formBuilder.group({});
    effect(() => this.onSignal());
  }

  private onSignal(): void {
    this.showFields = this.showFieldsSignal();
    this.onFields = this.showFields
      .map(field => field.showOn!.key)
      .reduce((acc: string[], curr: string): string[] => (acc.includes(curr) ? acc : [...acc, curr]), []);

    if (this.onFields.length > 0 && !this.subsFields.includes(this.onFields[this.onFields.length - 1])) {
      const latestOnField: string = this.onFields[this.onFields.length - 1];
      this.subsFields.push(latestOnField);

      this.formGroup.controls[latestOnField]?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
        this.showFields
          .map(field => this.formFieldService.enrichField(field, this.nested[field.key]))
          .forEach((field: UniFormField) => {
            if (field.showOn!.key === latestOnField) {
              if (field.showOn!.value === value) {
                this.fields.push(field);
                this.formFieldService.addUniFormData(this.fields, 'add');
              } else {
                this.fields = this.fields.filter((item: UniFormField) => field.showOn!.key !== item.showOn?.key || value === item.showOn?.value);
                this.formFieldService.removeUniFormData(this.fields);
              }
            }
          });
      });
    }
  }

  getWidth(): string {
    return `calc(100%/${this.fields.length})`;
  }

  ngOnInit(): void {
    this.formFieldService.uniFormGroupUpdated$.pipe(takeUntil(this.destroy$)).subscribe(value => (this.formGroup = value));

    if (this.url) {
      this.http.get(this.url).subscribe((field: any) => {
        // @TODO make with builder pattern
        field = this.formFieldService.enrichField(field, this.options);
        field = this.formFieldService.enrichField(field, this.nested[field.key]);
        this.fields = [field];
        this.formFieldService.addUniFormData(this.fields, 'add');

        if (field.fields) {
          if (isDefined(field.value)) {
            this.loadNestedFields(field.fields);
          }

          this.formGroup.controls[field.key]?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value: boolean): void => {
            if (value) {
              this.loadNestedFields(field.fields);
            } else {
              this.formFieldService.removeUniFormData([...this.fields].slice(1));
              this.fields = [field];
            }
          });
        }

        if (field.options || field.groups) {
          const hasOptionsFields = field.options?.some((option: UniFormFieldOption) => option.fields);
          const hasGroupsOptionsFields = field.groups?.some((group: any) => group.options?.some((option: UniFormFieldOption) => option.fields));

          if (hasOptionsFields || hasGroupsOptionsFields) {
            if (isDefined(field.value)) {
              this.setSelectedOption(field, field.value);
            }

            this.formGroup.controls[field.key]?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value: string) => {
              this.setSelectedOption(field, value);
            });
          }
        }
      });
    } else if (this.options?.type && this.options.key) {
      this.fields = [this.options as UniFormField];
      this.formFieldService.addUniFormData(this.fields, 'add');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && !changes['options'].firstChange) {
      this.fields[0] = {
        ...this.fields[0],
        ...changes['options'].currentValue,
      };

      this.formFieldService.addUniFormData(this.fields, 'set');
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();

    this.formFieldService.removeUniFormData(this.fields);
  }

  private loadNestedFields(urls: string[], fieldIndex: number = 0): void {
    urls.forEach((url: string, urlIndex: number): void => {
      this.http.get(url).subscribe((field: any): void => {
        // Is required for multi selection
        if (fieldIndex) {
          urlIndex = fieldIndex;
        }

        if (field.showOn) {
          const formField = this.formGroup.controls[field.showOn.key];

          if (field.showOn.value === formField.value) {
            this.addForField(field, urlIndex);
          }

          if (this.showFieldsSignal().every(value => value.key !== field.key)) {
            this.showFieldsSignal.update((values: UniFormField[]): UniFormField[] => [...values, field]);
          }
        } else {
          this.addForField(field, urlIndex);
        }
      });
    });
  }

  private addForField(field: any, urlIndex: number = 0) {
    this.fields[urlIndex + 1] = this.formFieldService.enrichField(field, this.nested[field.key]);
    // hotfix
    this.fields = this.fields.filter(field => isObject(field));
    this.formFieldService.addUniFormData(this.fields, 'add');
  }

  private setSelectedOption(field: UniFormField, value: string | number | string[] | number[]): void {
    const options = this.formFieldService.groupsToOptions(field);
    const selectedOptions = this.formFieldService.getSelectedOptions(options, value);

    // @TODO Remove only unselected option
    this.formFieldService.removeUniFormData([...this.fields].slice(1));

    this.fields = [field];

    if (selectedOptions.length > 0 && this.formFieldService.hasSelectedOptionsFields(selectedOptions)) {
      selectedOptions.forEach((option: UniFormFieldOption, index: number) => {
        this.loadNestedFields(option.fields || [], index);
      });
    } else {
      // @TODO Remove all options
      // this.formFieldService.dispatchRemove(this.elRef.nativeElement, this.fields);
    }
  }
}
