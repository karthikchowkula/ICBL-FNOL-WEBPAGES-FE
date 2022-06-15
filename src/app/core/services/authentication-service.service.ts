import { Injectable,Inject} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Router } from '@angular/router';
import { throwError, Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter, catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DOCUMENT } from '@angular/common';
import {environment} from '../../../environments/environment';
import { User } from '../Models/User-login';
const url:string=environment.URL+`/v1/auth/login`


@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {

  constructor(private http: HttpClient, private router: Router, 
    private snackBar: MatSnackBar,
    @Inject(DOCUMENT) private document: Document) {
    
     }

login(email:string,password:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
  
      withCredentials: 'true'
    })
  };
console.log(url)
  debugger
  this.http.post<any>(url,
  { "email": email, "password": password},httpOptions)
  .subscribe((res) => {
      console.log(res)
      
    },
      (err:HttpErrorResponse)=>{
        console.log(err)
      }
      );
  

  }
}
function getCookie(arg0: string): string | string[] {
  throw new Error('Function not implemented.');
}

