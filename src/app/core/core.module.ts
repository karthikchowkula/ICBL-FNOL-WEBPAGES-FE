import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './components/forgot-password/reset-password/reset-password.component';
import { AdminComponent } from './components/admin/admin.component';
import { SecureLocalStorageService } from './services/securels.service';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatOptgroup, MatOption } from '@angular/material/core';
// import { matSelectAnimations } from '@angular/material/select';
import { AdduserComponent } from './components/admin/adduser/adduser.component';
import { EdituserComponent } from './components/admin/edituser/edituser.component';
import { NewPasswordComponent } from './components/forgot-password/new-password/new-password.component';
import { ChangepasswordComponent } from './components/admin/changepassword/changepassword.component';
import { DeleteuserComponent } from './components/admin/deleteuser/deleteuser.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { OtpComponent } from './components/forgot-password/otp/otp.component';

@NgModule({
  declarations: [
LoginComponent,
ResetPasswordComponent,
AdminComponent,
AdduserComponent,
ChangepasswordComponent,
NewPasswordComponent,
DeleteuserComponent,
ForgotPasswordComponent,
OtpComponent,
EdituserComponent,
   

    

   
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    CoreRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    
    
    
    
    
    
   
    

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[SecureLocalStorageService]
})
export class CoreModule { }
