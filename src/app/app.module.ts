import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { AuthenticationServiceService } from './core/services/authentication-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SecureLocalStorageService } from './core/services/securels.service';
import {NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AuthInterceptor } from './core/Interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,HttpClientModule
    
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    AuthenticationServiceService,SecureLocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
