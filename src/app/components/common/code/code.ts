export const jsCode = `...
export class Component {

  form;

  handleForm(event) {
    this.form = event;
  }

  onFormSubmit(event) {
    console.log(event.value);
  }
}`;
