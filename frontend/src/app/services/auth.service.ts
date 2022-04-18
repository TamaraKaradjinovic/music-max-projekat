import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Account } from "../model/account";

const httpOptions = {
  headers: new HttpHeaders()
}

httpOptions.headers.append('Access-Control-Allow-Headers', '*');
httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
httpOptions.headers.append('Access-Control-Allow-Origin', '*');
httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
httpOptions.headers.append('Content-Type', 'application/json');
httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = 'http://localhost:9000/music-max/auth';

  constructor(
    private http: HttpClient,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}


  login(email: string, password: string) {
    return this.http.post(
      this.url + '/login',
      {
        email: email,
        password: password,
      }
    );
  }

  register(acc: Account) {
    return this.http.post(
      this.url + '/register',
      acc
    );
  }

  logout(){
    this.http.get(this.url + '/logout').subscribe(
      (next:Object) => {
        this.router.navigate(['/login'])
      },
      (err) => {
        this.snackBar.open(err.message, 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar'],
        });
      }
    )
  }

  getAccount(){
    return this.http.get<Account>(this.url + '/account')
  }

  getRoleCookie(): string | null {
    let cookies = document.cookie;
    for (let cookie of cookies.split(';')) {
      let cookieParts = cookie.trim().split('=');
      if (cookieParts[0] === 'role') return cookieParts[1];
    }
    return null;
  }

}