import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-number-min-max',
  templateUrl: './min-max.component.html',
})
export class AppStaticNumberMinMaxComponent {

  form: FormGroup | undefined;

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
