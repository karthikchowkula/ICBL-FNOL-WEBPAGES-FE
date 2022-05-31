import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { FormControl, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { AssistanceReqFormComponent } from './components/assistance-req-form/assistance-req-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderFooterComponent,
    AssistanceReqFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    CoreRoutingModule,
    FormControl,
    
    
    
  ],
  exports:[

    LoginComponent
  ],
})
export class CoreModule { }
