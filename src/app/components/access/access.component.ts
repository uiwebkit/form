import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

import {UniObject} from "uni-form-ng";


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html'
})
export class AppAccessComponent {

  formAccess: FormGroup;
  isCodeLinkVisible: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formAccess = this.formBuilder.group({});
  }

  handleAccessForm(event: FormGroup) {
    // console.log(event)
    this.isCodeLinkVisible = event.value['access'] === 'code';
    this.formAccess = event;
  }

  onAccessSubmit(event: UniObject<any>) {
    console.log(event);
  }
}
