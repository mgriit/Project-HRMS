import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit,OnDestroy {
  loginForm: FormGroup;
  isLoading=false;
  authStatusSusb : Subscription;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService,private toastr: ToastrService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember_me: [false],
    });

    this.authStatusSusb = this.auth.getAuthStatusListener().subscribe((status)=>{
      this.isLoading=false;
      if (!status) {
        this.toastr.error("Username or Password is incorrect");
      }
    })
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('remember_me');
  }

  login() {
    this.isLoading=true;

    this.auth
      .login(this.username.value, this.password.value);
  }

  ngOnDestroy(){
    this.authStatusSusb.unsubscribe();
  }
}
