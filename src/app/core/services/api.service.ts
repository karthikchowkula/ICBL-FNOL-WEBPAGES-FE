import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Router } from '@angular/router';
import { throwError, Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter, catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DOCUMENT } from '@angular/common';
import {environment} from '../../../environments/environment';
const reseturl:string=environment.URL+`/v1/auth/resetpass`
const refreshurl:string=environment.URL+`/v1/auth/refresh`
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private snackbar:MatSnackBar,private http: HttpClient) {
    
   }
   refreshToken(refreshtoken:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshtoken}`,
        withCredentials: 'true',
        
      })
    };
    return this.http.post<any>(refreshurl,{},httpOptions)
    .pipe(catchError(this.handleError));
}
   
  resetpassword(email:string){
    
  return this.http.post<any>(reseturl,{"email":email})
      .pipe(catchError(this.handleError));
  }
  public handleError = (error: HttpErrorResponse | any) => {
    this.snackbar.open('Error message: '+error, 'Dismiss', {
      duration: 4000,
    });
    return throwError(error);
  }
}
