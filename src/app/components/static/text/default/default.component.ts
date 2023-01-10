import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-text-default',
  templateUrl: './default.component.html',
})
export class AppStaticTextDefaultComponent implements OnInit {

  form: FormGroup | undefined;

  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef.nativeElement);
  }

  ngOnInit() {

  }

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
