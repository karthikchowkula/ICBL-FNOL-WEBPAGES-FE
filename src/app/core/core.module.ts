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

@NgModule({
  declarations: [
    LoginComponent,
    HeaderFooterComponent,
    ResetPasswordComponent,
    AdminComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    CoreRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[SecureLocalStorageService]
})
export class CoreModule { }
