import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { Router } from '@angular/router';
import { throwError, Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter, catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DOCUMENT } from '@angular/common';
import {environment} from '../../../environments/environment';
import { getRole } from '../Interfaces/getrole';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
roleValues!:getRole[]
  constructor(private apiservice:ApiService,private snackbar:MatSnackBar,private http: HttpClient) {
  
  }
  getRole(){
this.apiservice.getApp().subscribe((res=>{
  this.roleValues=res
}))  }
  
}
