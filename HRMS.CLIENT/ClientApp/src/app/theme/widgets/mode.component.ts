import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsService } from '@core';

@Component({
  selector: 'app-mode',
  template: `
    <button mat-icon-button class="matero-toolbar-button" (click)="sendOptions()">
      <mat-icon>{{theme =='dark'?'dark_mode':'light_mode'}}</mat-icon>
    </button>
  `,
})
export class ModeComponent {
  theme : string;

  constructor(private settingService: SettingsService) {
    this.theme = this.settingService.getOptions().theme;
  }

  sendOptions() {
    if (this.theme == 'dark') {
      localStorage.setItem('theme','light');
    }
    else
      localStorage.setItem('theme','dark');

    location.reload();
  }
}
