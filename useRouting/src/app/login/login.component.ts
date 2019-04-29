import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanGoOut } from '../contracts/can-go-out';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, CanGoOut {


  group: FormGroup;

  isAuthenticated$: Observable<boolean>;
  message: any;

  can(): boolean {
    console.log(this.group.dirty);
    if (this.group.dirty) {
      return confirm('R U SURE?');
    }
    return true;
  }

  login() {
    alert(JSON.stringify(this.group.value));
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, private activatedRoute: ActivatedRoute) {

    this.group = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });

    this.isAuthenticated$ = authService.isAuthenticated$;
    this.activatedRoute.queryParams
      .pipe(filter(qs => qs.message))
      .subscribe(x => {
        this.message = x.message;
      });
  }

  ngOnInit() {
  }

}
