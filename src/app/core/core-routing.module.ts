import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';


import { AssistanceReqFormComponent } from '../features/assistance-req-form/assistance-req-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdduserComponent } from './components/admin/adduser/adduser.component';



const routes: Routes = [
    {path:'login',component:LoginComponent},
  {
      path:'',component:LoginComponent
  } ,
  {path:'resetpass',component:ResetPasswordComponent},
  {path:'header_footer',component:HeaderFooterComponent},
  {path:'assitance_reqs_forms',component:AssistanceReqFormComponent},
  {path:'admin',component:AdminComponent},
  {path:'adduser',component:AdduserComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
