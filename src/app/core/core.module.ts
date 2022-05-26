import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    
    
    
    
    
  ]
})
export class CoreModule { }
