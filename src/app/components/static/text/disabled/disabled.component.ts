import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-text-disabled',
  templateUrl: './disabled.component.html',
})
export class AppStaticTextDisabledComponent {

  form: FormGroup | undefined;

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
