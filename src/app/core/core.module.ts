import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AdminComponent } from './components/admin/admin.component';
import { SecureLocalStorageService } from './services/securels.service';
import { AdduserComponent } from './components/admin/adduser/adduser.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpdateuserComponent } from './components/admin/updateuser/updateuser.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderFooterComponent,
    ResetPasswordComponent,
    AdminComponent,
    AdduserComponent,
    UpdateuserComponent,
   
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

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[SecureLocalStorageService]
})
export class CoreModule { }
