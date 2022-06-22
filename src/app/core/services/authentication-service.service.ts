import { PeriodicElement } from './../components/admin/admin.component';
import { Injectable,Inject} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Router } from '@angular/router';
import { throwError, Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter, catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DOCUMENT } from '@angular/common';
import {environment} from '../../../environments/environment';

const url:string=environment.URL+`/v1/auth/login`
import { SecureLocalStorageService } from './securels.service';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {
  loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router, private secure:SecureLocalStorageService,
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
    console.log(res['response_model'])
    localStorage.setItem('access_id',this.secure.encrypt(res['accesstoken']))
    localStorage.setItem('refresh_token',this.secure.encrypt(res['refreshtoken']))
    localStorage.setItem('expiresat',JSON.stringify(res['response_model']['expiresat']))
    localStorage.setItem('App',this.secure.encrypt(res['response_model']['app']))
    localStorage.setItem('role',res['response_model']['role'])
    this.loggedIn.next(true)
    debugger
    if(res['response_model']['app']=="Admin"){
      this.router.navigateByUrl('/admin')
    }
    else if(res['response_model']['app']=="CC"){
      this.router.navigateByUrl('/callcenter')
    }
 },
      (err:HttpErrorResponse)=>{
        console.log(err)
      }
      );


  }
 decrypt(value:string){
  return this.secure.decrypt(value)
 }
}



