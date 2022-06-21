import { SecureLocalStorageService } from './../services/securels.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private apiservice:ApiService,private secure:SecureLocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(async (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.handlerefreshtoken(request,next)
        } else {
      
        }
      })
    ) as any;
  } 
  handlerefreshtoken(request:HttpRequest<unknown>,next:HttpHandler){
   let refreshtoken:string=localStorage.getItem('refresh_token')!
   refreshtoken=this.secure.decrypt(refreshtoken)
   this.apiservice.refreshToken(refreshtoken).subscribe(res=>{
    console.log(res)
  })
  }
  }

