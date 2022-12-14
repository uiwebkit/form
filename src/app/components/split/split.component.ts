import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";

import {RxUnsubscribe, UniObject} from "uni-form-ng";


@Component({
  selector: 'app-split',
  templateUrl: './split.component.html'
})
export class AppSplitComponent extends RxUnsubscribe {

  count: number = 0;
  ages: number[] = [21, 35];
  splitAges: number[][] = [];
  usa: string[] = [];
  canada: string[] = [];
  formSplit: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
    this.formSplit = this.formBuilder.group({});
  }

  handleSplitForm(event: FormGroup) {
    this.formSplit = event;
    this.destroy$.next(true);
    // console.log(event);

    this.formSplit.controls['gender']?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean): void => {
        this.count = value ? this.getInitCount() * 2 : this.getInitCount() / 2;

        if (this.count === 1) {
          this.count = 0;
        }
      });

    this.formSplit.controls['age']?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: number): void => {
        const range = +value;

        if (this.splitAges.length > 0) {
          this.count = this.count / this.splitAges.length;
        }

        if (range >= 1 && range <= 50) {
          this.splitAges = this.getRangeAges(this.ages, range);
          this.count = this.getInitCount() * this.splitAges.length;
        }

        if (range === 0) {
          this.splitAges = [];
          this.setInitCount();
        }
      });

    this.formSplit.controls['usa']?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: string[]): void => {
        if (this.usa.length > 0) {
          this.count = this.count / this.usa.length;
        }

        if (value.length > 0) {
          this.count = this.getInitCount() * value.length;
        }

        if (value.length === 0) {
          this.setInitCount();
        }

        this.usa = value;
      });

    this.formSplit.controls['canada']?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: string[]): void => {
        if (this.canada.length > 0) {
          this.count = this.count / this.canada.length;
        }

        if (value.length > 0) {
          this.count = this.getInitCount() * value.length;
        }

        if (value.length === 0) {
          this.setInitCount();
        }

        this.canada = value;
      });
  }

  getInitCount(): number {
    return !this.count ? 1 : this.count;
  }

  setInitCount(): void {
    if (this.count === 1) {
      this.count = 0;
    }
  }

  getRangeAges(age: number[], range: number): number[][] {
    let splittedAges = [age[0]];
    let next = age[0] + range;

    while (next <= age[1]) {
      splittedAges.push(next);
      next = next + range;
    }

    return splittedAges.map((value: number) => [value, value + (range - 1) > age[1] ? age[1] : value + (range - 1)]);
  }

  onSplitSubmit(event: UniObject<any>) {
    console.log(event);
  }
}
