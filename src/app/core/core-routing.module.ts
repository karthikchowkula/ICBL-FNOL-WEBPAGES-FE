import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { AssistanceReqFormComponent } from '../features/assistance-req-form/assistance-req-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdduserComponent } from './components/admin/adduser/adduser.component';
import { EdituserComponent } from './components/admin/edituser/edituser.component';
import { DeleteuserComponent } from './components/admin/deleteuser/deleteuser.component';
import { ChangepasswordComponent } from './components/admin/changepassword/changepassword.component';
import { ForgotPasswordComponent } from './components/admin/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/admin/new-password/new-password.component';
import { OtpComponent } from './components/admin/otp/otp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{
path:'',component:LoginComponent
} ,
{path:'resetpass',component:ResetPasswordComponent},
{path:'header_footer',component:HeaderFooterComponent},
{path:'assitance_reqs_forms',component:AssistanceReqFormComponent},
{path:'admin',component:AdminComponent},
{path:'add_user',component:AdduserComponent},
{path:'delete_user',component:DeleteuserComponent},
{path:'edit_user',component:EdituserComponent},
{path:'change_user',component:ChangepasswordComponent},
{path:'forgot_password',component:ForgotPasswordComponent},
{path:'new_password',component:NewPasswordComponent}, 
{path:'otp',component:OtpComponent}, 
{path:'home_page',component:HomePageComponent}, 
{path:'task_page',component:TaskComponent}, 


];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class CoreRoutingModule {}