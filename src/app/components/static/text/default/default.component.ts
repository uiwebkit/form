import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-static-text-default',
  templateUrl: './default.component.html',
})
export class AppStaticTextDefaultComponent {

  hide: boolean = true;
  form: FormGroup | undefined;
  isCreate$: Observable<boolean> | undefined;

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
