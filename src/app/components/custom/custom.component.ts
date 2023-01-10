import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html'
})
export class AppCustomComponent {
  formFruit: FormGroup;
  formAuth: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formFruit = this.formBuilder.group({});
    this.formAuth = this.formBuilder.group({});
  }

  handleFruitForm(event: any) {
    this.formFruit = event;
  }

  onFruitSubmit(event: any) {
    console.log(event.value);
  }

  handleAuthForm(event: any) {
    this.formAuth = event;
  }

  onAuthSubmit(event: any) {
    console.log(event.value);
  }
}
