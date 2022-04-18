import { Component, OnDestroy, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { AuthService } from "../../services/auth.service";

import { Router } from "@angular/router";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  model : Login = {
    email : '',
    password : ''
  }
  private error: string | undefined;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  subscriptions : Subscription[] = [];

  ngOnDestroy(): void {
    console.log('gasim se...')
    const u = this.subscriptions.length
    let i = 0
    for (const x of this.subscriptions) {
      if (!x.closed)
        i = i + 1
      x.unsubscribe();
    }
    console.log('ukupno...' + u + ' ugasio sam '+ i)
  }

  login() {
    this.error = '';
    if (this.model.email != '' && this.model.password != '') {
      this.subscriptions.push(this.authService.login(this.model.email, this.model.password).subscribe(
        (res) => {
          console.log('logged in')
          this.authService.router.navigate(['/home'])
        },
        (err) => {
          if (err.status === 400) {
            this.error = 'Wrong email or password';
          }
        }
      ))
    }
  }




}
