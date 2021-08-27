import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService, PreloaderService } from '@core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService,private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthUser();
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
