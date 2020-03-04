import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ItemService } from './item/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  configFormGroup: FormGroup;

  constructor(public ids: ItemService, fb: FormBuilder) {
    this.configFormGroup = fb.group({
      source: ['mutable'],
      strategy: ['default']
    });
  }
}
