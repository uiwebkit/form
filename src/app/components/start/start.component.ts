import { Component } from '@angular/core';

import hl from 'highlight.js';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html'
})
export class AppStartComponent {

  private moduleString = `@NgModule({
  imports: [UniFormModule]
})`;

  module  = hl.highlight(this.moduleString, {language: 'typescript'}).value;
  npm  = hl.highlightAuto('npm i uni-form-ng').value;
  form: FormGroup | undefined;

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
