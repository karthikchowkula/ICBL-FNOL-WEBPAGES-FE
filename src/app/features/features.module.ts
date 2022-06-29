import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// import { TaskComponent } from '../core/components/task/task.component';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule, MatOptgroup, MatOption, MatOptionModule } from '@angular/material/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityComponent } from './utility/utility.component';
import { ReportsComponent } from './reports/reports.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CurrentStatusComponent } from './current-status/current-status.component';
import { SecureLocalStorageService } from '../core/services/securels.service';
import { ElementSchemaRegistry } from '@angular/compiler';
import { MatSelectModule } from '@angular/material/select';
import { TaskComponent } from './task/task.component';

// import { ChangepasswordComponent } from '../core/components/admin/changepassword/changepassword.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from '../core/core-routing.module';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';









@NgModule({
  declarations: [

  UtilityComponent,
  ReportsComponent,
  CurrentStatusComponent,
  TaskComponent,
  
 

  HomePageComponent,
  HeaderFooterComponent,

 
  



  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    RouterModule,
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    
    MatRadioModule,
    MatCommonModule,
    


    
  
    
    

    
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers:[SecureLocalStorageService]
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[SecureLocalStorageService]
})
export class FeaturesModule { }
