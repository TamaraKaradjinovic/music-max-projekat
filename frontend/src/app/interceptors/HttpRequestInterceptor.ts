import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { MatSnackBar, MatSnackBarModule  } from '@angular/material/snack-bar';
  import { Router } from '@angular/router';
  import { Observable, of, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  @Injectable()
  export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private router: Router, private _snackBar: MatSnackBar) {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      request = request.clone({
        withCredentials: true,
      });
      console.log(request)
      return next
        .handle(request)
        .pipe(catchError((err) => this.handleError(err)));
    }
  
  
    private handleError(err: any) {
      if (err.status == 401) {
        this.router.navigate(['/login']);
  
        let msg = 'You need to login first!';
  
        this._snackBar.open(msg, 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar'],
        });
  
        return of(err.message);
      } else if (err.status == 500) {
        let msg = 'Internal server error. Please try again!';
  
        this._snackBar.open(msg, 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar'],
        });
  
        of(err.message);
      }
  
      return throwError(err);
    }
  }