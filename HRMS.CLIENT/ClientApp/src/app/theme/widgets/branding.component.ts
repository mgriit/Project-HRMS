import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <img src="./assets/images/logo_circle.png" class="matero-branding-logo-expanded" alt="logo" />
      <span class="matero-branding-name">DMC-Rajshahi</span>
    </a>
  `,
})
export class BrandingComponent {}
