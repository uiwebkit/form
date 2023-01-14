import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html'
})
export class AppCustomComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    console.log(event.value);
  }
}
