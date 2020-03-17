import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MathComponent } from './math.component';

const mathroute: Routes = [
  { path: '', component: MathComponent }
];

@NgModule({
  declarations: [MathComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mathroute)
  ] // import MODULES
})
export class MathModule {}
