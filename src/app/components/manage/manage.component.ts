import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

import {RxUnsubscribe} from "uni-form-ng";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html'
})
export class AppManageComponent extends RxUnsubscribe {

  formRemove: FormGroup;
  formManage: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
    this.formRemove = this.formBuilder.group({});
    this.formManage = this.formBuilder.group({});
  }

  handleRemoveForm(event: FormGroup) {
    this.formRemove = event;
  }

  onRemoveSubmit(event: FormGroup) {
    console.log(event.value);
  }

  handleManageForm(event: FormGroup) {
    this.formManage = event;
  }

  onManageSubmit(event: FormGroup) {
    console.log(event.value);
  }
}
