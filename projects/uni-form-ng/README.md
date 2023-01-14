# UniFormNg

This is an Angular 15+ library, that automatically builds and renders highly customizable dynamic forms based on JSON data.

License: `MIT`

### Out of the box, you get:

- ready to use well-designed forms (Google's Material design);
- a well-tested and low-coding solution that requires only JSON data;
- dynamic fields based on Angular reactive forms;
- full access to the form object for the easy customization;
- rendering of standard validation errors (required, min, max, ...), which you can simply tweak to your liking;

## How to connect?

Run: `npm i uni-form-ng`

You do NOT need to install `"@angular/forms"`, `"@angular/material"` or any other dependencies.

Then you need to add a dependency into your Angular Module:

```
@NgModule({
  imports: [UniFormModule]
})
```

In main styles file (styles.css) please add:

```
@import "@angular/material/prebuilt-themes/indigo-pink.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
```

## How to use?

### HTML
```
<uni-form-ng (formGroupEvent)='handleForm($event)' (submitEvent)='onFormSubmit($event)'>

  <uni-form-group-ng
    [url]="'assets/mocks/group/group.json'"
    [nested]='{countries: {type: "autocomplete", multi: true},
      login: {value: "email@email.com"}, password: {value: "password"}}'
  ></uni-form-group-ng>

  <button type='submit' mat-button [disabled]='!form?.valid'>SUBMIT</button>
</uni-form-ng>
```

### JSON
```
URL: assets/mocks/group/group.json:

["assets/mocks/dynamic/countries.json","assets/mocks/dynamic/auth.json"]

URL: assets/mocks/dynamic/countries.json:

{"type":"select","key":"countries","label":"Select country / countries","groups":[{"name":"North America","options":[{"label":"Canada","value":"Canada","fields":["assets/mocks/dynamic/canada.json"]},{"label":"USA","value":"USA","fields":["assets/mocks/dynamic/usa.json"]}]}]}

URL: assets/mocks/dynamic/auth.json:

{"type":"checkbox","key":"auth","label":"Check to enable authorization","fields":["assets/mocks/dynamic/login.json","assets/mocks/dynamic/password.json"]}
```

### JS/TS
```
...
export class Component {

  form;

  handleForm(event) {
    this.form = event;
  }

  onFormSubmit(event) {
    console.log(event.value);
  }
}
```

[Static fields demo](https://uiwebkit.github.io/form/static/text)

[Dynamic fields demo](https://uiwebkit.github.io/form/dynamic/select)

[Custom forms demo](https://uiwebkit.github.io/form/custom)

## API overview

### Selector: `uni-form-ng`

`@Input() clean: boolean` - by default is false and newly added dynamic fields will not be removed form Angular reactive form object after switch. If true, then newly added dynamic fields will be removed after switch to another fields.

`@Output() formGroupEvent: EventEmitter<FormGroup>` - returns a NEW Angular reactive form object every time when a new field was added or removed.

`@Output() submitEvent: EventEmitter<FormGroup>` - returns an Angular reactive form object when form is submitted.

### Selector: `uni-form-group-ng`

`@Input() url: string` - the URL link to JSON data with list of fields.

`@Input() nested: UniObject<UniFormNested>` - the object for nested fields deep configuration.

### Selector: `uni-form-field-ng`

`@Input() url: string` - the URL link to JSON data for building and rendering form field.

`@Input() options: Partial<UniFormField>` - the object for the field deep configuration.

`@Input() nested: UniObject<UniFormNested>` - the object for nested fields deep configuration.

## Now I'm looking for new job opportunities. Please, contact me, if you are interested. Thank you! [Author's profile](https://www.linkedin.com/in/univitali/)
