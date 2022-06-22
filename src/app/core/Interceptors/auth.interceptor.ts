import { SecureLocalStorageService } from './../services/securels.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError,switchMap } from 'rxjs';
import { ApiService } from '../services/api.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isrefresh!:boolean;


  constructor(private apiservice:ApiService,private secure:SecureLocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 let accesstoken=this.secure.decrypt(localStorage.getItem("access_id")!)
    if (accesstoken) {
     request= request.clone({ setHeaders: { Authorization: `Bearer ${accesstoken}` } });
    }
 
    return next.handle(request).pipe(
      catchError(error => {
        debugger
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handleAuthorizationError(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }
  private handleAuthorizationError(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isrefresh) {
      debugger
      this.isrefresh = true;
      let refreshtoken=this.secure.decrypt(localStorage.getItem("refresh_token")!)
     // I have created a route on my back-end to generate a new access token
      return this.apiservice.refreshToken(refreshtoken).pipe(
        switchMap((response:any) => {
          console.log(response)
          this.isrefresh=false
          localStorage.setItem("access_id",this.secure.encrypt(response['access_token']))
          request= request.clone({ setHeaders: { Authorization: `Bearer ${response['access_token']}` } });
          return next.handle(request);
        })
      );
    } else {
      return next.handle(request);
    }
  }
  }

