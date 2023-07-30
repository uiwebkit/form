import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-customization',
  templateUrl: './customization.component.html'
})
export class AppCustomCustomizationComponent {

  form: FormGroup | undefined;

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
