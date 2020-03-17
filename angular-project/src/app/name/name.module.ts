import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NameComponent } from './name.component';

const nameroute: Routes = [
  { path: '', component: NameComponent }
];

@NgModule({
  declarations: [NameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(nameroute)
  ] // import MODULES
})
export class NameModule {}
