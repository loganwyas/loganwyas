import { Component } from '@angular/core';

@Component({
  selector: 'about-sect',
  template: `
  <div class="container text-center">
    <h3>About the Company</h3>
    <p style="text-align: left">This company strives to give you the best results. We have been around for {{yearsAgo}} years, so we know what we are doing. Although {{founded}} was a rough year, we were able to rise to the occasion and build our business from the ground up.</p>
  </div>
  `
})
export class AboutComponent {
  founded = 1985;
  currentYear = new Date().getFullYear();
  yearsAgo = this.currentYear - this.founded;
}
