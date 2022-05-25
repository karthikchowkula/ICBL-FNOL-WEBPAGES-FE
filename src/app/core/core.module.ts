import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
