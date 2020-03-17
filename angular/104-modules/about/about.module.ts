import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about-section.component';

@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent], // export COMPONENTS, directives, pipes
  imports: [CommonModule] // import MODULES
})
export class AboutModule {}