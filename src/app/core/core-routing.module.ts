import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';



const routes: Routes = [
    {path:'login',component:LoginComponent},
  {
      path:'login',component:LoginComponent
  } ,
  {path:'resetpass',component:ResetPasswordComponent},
  {path:'header_footer',component:HeaderFooterComponent},
  {path:'assitance_req_form',component:HeaderFooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
