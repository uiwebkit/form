import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-text-validation',
  templateUrl: './validation.component.html',
})
export class AppStaticTextValidationComponent {

  form: FormGroup | undefined;

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
